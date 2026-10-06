import MarkdownPage from "@/components/site/MarkdownPage";
import { PHANTOM_STATUS } from "@/data/phantomStatus";

export default function PhantomStatus() {
  return <MarkdownPage doc={PHANTOM_STATUS} testId="phantom-status-page" />;
}
