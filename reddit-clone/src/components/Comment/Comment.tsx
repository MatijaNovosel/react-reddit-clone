import { formatDistance } from "date-fns";
import { abbreviateNumber } from "../../helpers/helpers";
import { Comment as CommentModel } from "../../models/comment";
import { Icon } from "../Icon";
import React from "react";
import './Comment.css';

interface CommentProps {
  comment: CommentModel;
  depth: number;
}

export function Comment(props: CommentProps) {
  const nestedComments = (props.comment.children || []).map((comment) => {
    return <Comment depth={props.depth + 1} comment={comment} />;
  });

  return (
    <React.Fragment>
      <div
        className="flex py-4 px-3 bg-gray-100 rounded-lg my-1"
        style={{ marginLeft: `${props.depth * 25}px` }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4"
          alt=""
          className="w-8 h-8 rounded-full mr-3 mt-1"
        />
        <div className="flex flex-col">
          <div className="text-sm space-x-1">
            <span>u/{props.comment.author.username}</span>
            <span>•</span>
            <span>
              {formatDistance(new Date(props.comment.timeStamp), new Date(), {
                addSuffix: true
              })}
            </span>
          </div>
          <span className="py-1">{props.comment.content}</span>
          <div className="flex space-x-1">
            <Icon
              name="arrowUp"
              color="#FF8b60"
              className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md select-none"
            />
            <span className="font-bold select-none">
              {abbreviateNumber(props.comment.upvotes)}
            </span>
            <Icon
              name="arrowDown"
              color="#9494FF"
              className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md select-none"
            />
            <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-1 rounded-md">
              <Icon name="comment" color="#94a6ca" className="h-4 w-4" />
              <span className="font-bold">Reply</span>
            </div>
            <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-1 rounded-md">
              <Icon name="share" color="#94a6ca" className="h-4 w-4" />
              <span className="font-bold">Share</span>
            </div>
            <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-1 rounded-md">
              <Icon name="report" color="#94a6ca" className="h-4 w-4" />
              <span className="font-bold">Report</span>
            </div>
            <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-1 rounded-md">
              <Icon name="save" color="#94a6ca" className="h-4 w-4" />
              <span className="font-bold">Save</span>
            </div>
          </div>
        </div>
      </div>
      {nestedComments}
    </React.Fragment>
  );
}
