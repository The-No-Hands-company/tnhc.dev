import MarkdownPage from "@/components/site/MarkdownPage";
import BrandFiles from "@/components/site/BrandFiles";
import { BRAND } from "@/data/brand";

export default function Brand() {
  return <MarkdownPage doc={BRAND} testId="brand-page" before={<BrandFiles />} />;
}
