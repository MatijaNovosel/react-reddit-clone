import { SubReddit } from "../../models/subReddit";

interface GrowingCommunityCardItemProps {
  index: number;
  subReddit: SubReddit;
}

export function GrowingCommunityCardItem(props: GrowingCommunityCardItemProps) {
  return (
    <div className="flex space-x-3 items-center font-bold text-lg py-3 px-6 hover:bg-gray-100 cursor-pointer">
      <span className="mr-4">{props.index}</span>
      <img
        src="https://avatars.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4"
        alt=""
        className="h-12 w-12 rounded-full"
      />
      <span>r/{props.subReddit.name}</span>
    </div>
  );
}
