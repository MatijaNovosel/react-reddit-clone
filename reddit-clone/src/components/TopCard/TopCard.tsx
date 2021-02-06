import { Icon } from "../Icon";
import { TopCardItem } from "./TopCardItem";

export function TopCard() {
  return (
    <div className="border border-gray-300 rounded-lg shadow w-full bg-white p-5 space-x-2 flex mb-3 overflow-auto">
      <TopCardItem
        icon={<Icon name="fire" color="#3b82f6" className="mr-2 h-6" />}
        text="Hot"
      />
      <TopCardItem
        icon={<Icon name="webClock" color="#3b82f6" className="mr-2 h-6" />}
        text="New"
      />
      <TopCardItem
        icon={<Icon name="graphSpline" color="#3b82f6" className="mr-2 h-6" />}
        text="Top"
      />
      <TopCardItem
        icon={<Icon name="chevronUp" color="#3b82f6" className="mr-2 h-6" />}
        text="Rising"
      />
    </div>
  );
}
