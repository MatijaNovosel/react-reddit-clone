import { default as arrowUp } from '../assets/arrow-up.svg';
import { default as arrowDown } from '../assets/arrow-down.svg';
import { default as comment } from '../assets/comment.svg';
import { randInt, abbreviateNumber } from "../helpers/helpers";
import { Link } from "react-router-dom";

interface PostCardProps {
  postTitle: string;
  upvotes: number;
}

export function PostCard(props: PostCardProps) {
  return (
    <div className="border border-gray-300 rounded-md shadow bg-white flex justify-between pr-10">
      <div className="flex">
        <div className="flex flex-col justify-center space-y-1 bg-gray-100 rounded-l-lg items-center w-20">
          <img alt="" src={arrowUp} className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md select-none" />
          <span className="font-bold select-none">{abbreviateNumber(props.upvotes)}</span>
          <img alt="" src={arrowDown} className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md select-none" />
        </div>
        <div className="flex flex-col justify-center py-5 pl-5">
          <div className="text-lg font-semibold text-gray-400">
            <Link className="cursor-pointer" to="/comments/2">{props.postTitle}</Link>
          </div>
          <div className="flex space-x-1">
            <span className="font-bold">r/Something</span>
            <span>•</span>
            <span className="text-gray-500">Posted by u/Someone</span>
          </div>
          <span className="text-sm text-gray-400">4 hours ago</span>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <span>{randInt(1, 500)}</span>
        <img alt="" src={comment} className="h-5 w-5" />
      </div>
    </div>
  );
}