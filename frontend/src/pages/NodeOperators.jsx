import MarkdownPage from "@/components/site/MarkdownPage";
import { NODE_OPERATORS } from "@/data/nodeOperators";

export default function NodeOperators() {
  return <MarkdownPage doc={NODE_OPERATORS} testId="node-operators-page" />;
}
