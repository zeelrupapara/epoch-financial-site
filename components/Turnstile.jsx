"use client";

import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

// Cloudflare's public "always passes" test key keeps the widget working in
// local dev and previews when no real key is configured. Production must set
// NEXT_PUBLIC_TURNSTILE_SITE_KEY (and TURNSTILE_SECRET_KEY on the server).
export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

let scriptPromise;
function loadScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.defer = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

/**
 * Renders a Cloudflare Turnstile CAPTCHA.
 * - `onVerify(token)` fires with a token when the challenge passes, and with
 *   "" when the token expires or errors so the form can disable submit again.
 * - Bump `resetKey` to force a fresh challenge (e.g. after a failed submit).
 */
export default function Turnstile({ onVerify, resetKey = 0, className = "" }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onVerifyRef = useRef(onVerify);
  onVerifyRef.current = onVerify;

  useEffect(() => {
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "light",
          callback: (token) => onVerifyRef.current?.(token),
          "expired-callback": () => onVerifyRef.current?.(""),
          "error-callback": () => onVerifyRef.current?.(""),
        });
      })
      .catch(() => onVerifyRef.current?.(""));
    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {}
        widgetIdRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (resetKey && widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch {}
      onVerifyRef.current?.("");
    }
  }, [resetKey]);

  return <div ref={containerRef} className={className} />;
}
