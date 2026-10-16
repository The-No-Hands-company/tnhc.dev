import MarkdownPage from "@/components/site/MarkdownPage";
import PrivacyCheckBox from "@/components/site/PrivacyCheckBox";
import CanaryBox from "@/components/site/CanaryBox";
import { PRIVACY } from "@/data/privacy";

export default function Privacy() {
  const status = (
    <div className="mx-auto mt-28 max-w-3xl flex flex-col gap-3">
      <PrivacyCheckBox />
      <CanaryBox />
    </div>
  );
  return <MarkdownPage doc={PRIVACY} testId="privacy-page" before={status} />;
}
