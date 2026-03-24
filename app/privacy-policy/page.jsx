import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | EPOCH Financial",
  description:
    "EPOCH Financial Group, Inc. is committed to protecting the privacy and confidentiality of nonpublic personal information provided by users of this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[280px] lg:min-h-[450px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(17,55,95,0.72), rgba(17,55,95,0.88)), url("/assets/images/privacy-hero.jpg")',
            }}
          >
            <div className="relative z-10 w-full flex flex-col items-center text-center gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 14 }}
                >
                  shield
                </span>
                LEGAL
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white 2xl:px-6 lg:px-16 md:px-12 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-10 text-body-gray md:text-base text-sm leading-relaxed">
          {/* Introduction */}
          <div>
            <p>
              EPOCH Financial Group, Inc. (&ldquo;EPOCH,&rdquo;
              &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
              committed to protecting the privacy and confidentiality of
              nonpublic personal information provided by users of this website.
            </p>
            <p className="mt-4">
              This Privacy Policy outlines how information is collected, used,
              and safeguarded when you interact with our website.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide
              through the website, primarily when you contact us or submit
              inquiries.
            </p>
            <p className="mt-4">This may include:</p>
            <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
              <li>Name and contact details</li>
              <li>Information related to your inquiry or request</li>
              <li>Any additional information you choose to provide</li>
            </ul>
            <p className="mt-4">
              EPOCH collects this information solely for communication and
              service-related purposes.
            </p>
          </div>

          {/* Use of Information */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              Use of Information
            </h2>
            <p>Personal information collected is used to:</p>
            <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
              <li>Respond to inquiries and communications</li>
              <li>
                Facilitate business interactions and service engagement
              </li>
              <li>
                Support the evaluation and management of financial transactions
              </li>
            </ul>
            <p className="mt-4">
              We may also use aggregated, non-personal data to analyze website
              usage and improve our services.
            </p>
          </div>

          {/* Information Sharing and Disclosure */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              Information Sharing and Disclosure
            </h2>
            <p>
              EPOCH does not sell or distribute personal information. However,
              information may be shared in limited circumstances, including:
            </p>
            <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
              <li>
                With affiliates and service providers supporting operations
              </li>
              <li>
                With legal, regulatory, or compliance authorities when required
              </li>
              <li>
                With auditors, attorneys, or third-party administrators where
                necessary
              </li>
              <li>
                To comply with applicable laws, including anti-money laundering
                regulations
              </li>
              <li>When explicitly authorized by the user</li>
            </ul>
            <p className="mt-4">
              These disclosures are made only to the extent necessary for
              operational or legal purposes.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              Data Security
            </h2>
            <p>
              EPOCH implements industry-standard security measures to protect
              personal information.
            </p>
            <p className="mt-4">These measures include:</p>
            <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
              <li>Secure servers protected by firewalls</li>
              <li>Restricted access to authorized personnel</li>
              <li>
                Physical and digital safeguards to prevent unauthorized access
              </li>
            </ul>
            <p className="mt-4">
              While we take reasonable steps to protect data, no system can
              guarantee complete security.
            </p>
          </div>

          {/* Website Communications Disclaimer */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              Website Communications Disclaimer
            </h2>
            <p>
              Information transmitted through this website may not be secure.
              Users are advised not to send confidential or sensitive information
              through the website, as communications may be accessible to third
              parties.
            </p>
          </div>

          {/* Use of Website Data */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              Use of Website Data
            </h2>
            <p>
              We may collect and use aggregated statistical data to:
            </p>
            <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
              <li>Monitor website performance</li>
              <li>Improve user experience</li>
              <li>Enhance service offerings</li>
            </ul>
            <p className="mt-4">
              This data does not identify individual users.
            </p>
          </div>

          {/* User Consent */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              User Consent
            </h2>
            <p>
              By using this website and submitting personal information, you
              consent to the collection and use of your information as described
              in this Privacy Policy.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              Policy Updates
            </h2>
            <p>
              EPOCH reserves the right to update or modify this Privacy Policy
              at any time. Updates will be posted on this page to ensure
              transparency regarding how information is handled.
            </p>
            <p className="mt-4">
              Continued use of the website after changes indicates acceptance of
              the updated policy.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-secondary md:text-xl text-lg font-bold mb-4">
              Contact Information
            </h2>
            <p>
              For questions regarding this Privacy Policy or your personal
              information, please contact:
            </p>
            <div className="mt-4 flex flex-col gap-1">
              <p className="font-semibold text-secondary">
                EPOCH Financial Group, Inc.
              </p>
              <p>3350 Riverwood Pkwy, Suite 1900</p>
              <p>Atlanta, Georgia 30339</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+18884000170"
                  className="text-primary hover:underline"
                >
                  888-400-0170
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:reachus@epochfinancial.com"
                  className="text-primary hover:underline"
                >
                  reachus@epochfinancial.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
