import MarkdownPage from "@/components/site/MarkdownPage";
import { CHARTER } from "@/data/charter";

export default function Charter() {
  return <MarkdownPage doc={CHARTER} testId="charter-page" />;
}
