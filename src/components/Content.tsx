import { ContentHeader } from "./main/ContentHeader";
import { ContentTabs } from "./main/ContentTabs";

export function Content() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-[calc(100dvh-60px)] overflow-y-auto px-4 py-6 mx-auto max-w-[1480px] w-full">
        <ContentHeader />
        <ContentTabs />
      </div>
    </>
  );
}
