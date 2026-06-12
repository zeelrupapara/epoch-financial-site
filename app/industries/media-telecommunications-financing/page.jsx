import MediaTelecomPageClient from "./MediaTelecomPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/media-telecommunications-financing");

export default function MediaTelecomPage() {
  return <MediaTelecomPageClient />;
}
