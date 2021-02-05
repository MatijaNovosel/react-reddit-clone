import { Icon } from "./Icon";
import { abbreviateNumber } from "../helpers/helpers";
import { Link } from "react-router-dom";
import { Post } from "../models/post";
import { formatDistance } from "date-fns";

interface PostCardProps {
  post: Post;
}

export function PostCard(props: PostCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg shadow bg-white flex justify-between pr-10">
      <div className="flex">
        <div className="flex flex-col justify-center space-y-1 bg-gray-100 rounded-l-lg items-center w-20">
          <Icon
            name="arrowUp"
            color="#FF8b60"
            className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md select-none"
          />
          <span className="font-bold select-none">
            {abbreviateNumber(props.post.upvotes)}
          </span>
          <Icon
            name="arrowDown"
            color="#9494FF"
            className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md select-none"
          />
        </div>
        <div className="flex flex-col justify-center py-5 pl-5">
          <div className="text-lg font-semibold text-gray-400">
            <Link className="cursor-pointer" to={`comments/${props.post.id}`}>
              {props.post.title}
            </Link>
          </div>
          <div className="flex space-x-1 mb-1">
            <span className="font-bold">r/Something</span>
            <span>•</span>
            <span className="text-gray-500">
              Posted by
              <span className="hover:underline cursor-pointer ml-1">
                u/{props.post.author.username}
              </span>
            </span>
          </div>
          <span className="text-sm text-gray-400">
            {formatDistance(new Date(props.post.timeStamp), new Date(), {
              addSuffix: true
            })}
          </span>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <span className="font-bold">{props.post.comments}</span>
        <Icon name="comment" color="#94a6ca" className="h-5 w-5" />
      </div>
    </div>
  );
}
