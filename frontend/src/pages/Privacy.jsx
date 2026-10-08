import MarkdownPage from "@/components/site/MarkdownPage";
import PrivacyCheckBox from "@/components/site/PrivacyCheckBox";
import { PRIVACY } from "@/data/privacy";

export default function Privacy() {
  return <MarkdownPage doc={PRIVACY} testId="privacy-page" before={<PrivacyCheckBox />} />;
}
