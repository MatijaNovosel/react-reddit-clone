import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getService, Types } from "../di-container";
import { Post } from "../models/post";
import { Icon } from "../components/Icon";
import { IPostService } from "../services/interfaces/postService";
import { abbreviateNumber } from "../helpers/helpers";
import { formatDistance } from "date-fns";
import { Comment } from "../models/comment";
import { ICommentService } from "../services/interfaces/commentService";

type TParams = { id: string };

export function PostDetails() {
  const [post, setPostDetails] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<TParams>();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setPostDetails(
      await getService<IPostService>(Types.PostService).getPostDetails(
        parseInt(id)
      )
    );
    setComments(
      await getService<ICommentService>(
        Types.CommentService
      ).getCommentsForPost(parseInt(id))
    );
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return loading ? (
    <div className="flex justify-center mt-6">
      <Icon name="loading" className="animate-spin w-16 h-16" color="#000000" />
    </div>
  ) : (
    <main className="container mx-auto py-5 pr-5 my-6 bg-white rounded-lg flex shadow">
      <div className="flex flex-col space-y-1 items-center w-20">
        <Icon
          name="arrowUp"
          color="#FF8b60"
          className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md select-none"
        />
        <span className="font-bold select-none">
          {abbreviateNumber(post?.upvotes as number)}
        </span>
        <Icon
          name="arrowDown"
          color="#9494FF"
          className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md select-none"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex space-x-1">
          <img
            src="https://avatars.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4"
            alt=""
            className="w-5 h-5 rounded-full mt-1 mr-1"
          />
          <span className="font-bold cursor-pointer hover:underline">
            r/{post?.subReddit.name}
          </span>
          <span>•</span>
          <span className="text-gray-500">
            Posted by
            <span className="hover:underline cursor-pointer mx-1">
              u/{post?.author.username}
            </span>
            <span className="mr-1">•</span>
            {formatDistance(
              new Date((post?.timeStamp as number) || 0),
              new Date(),
              {
                addSuffix: true
              }
            )}
          </span>
        </div>
        <span className="text-xl font-bold my-2">{post?.title}</span>
        <div className="bg-black rounded-lg h-96 w-full mt-1"></div>
        <div className="flex mt-3 space-x-2 select-none">
          <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-2 rounded-md">
            <Icon name="comment" color="#94a6ca" className="h-3 w-3" />
            <span className="font-bold">{post?.comments} Comments</span>
          </div>
          <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-2 rounded-md">
            <Icon name="share" color="#94a6ca" className="h-4 w-4" />
            <span className="font-bold">Share</span>
          </div>
          <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-2 rounded-md">
            <Icon name="save" color="#94a6ca" className="h-4 w-4" />
            <span className="font-bold">Save</span>
          </div>
          <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-2 rounded-md">
            <Icon name="hide" color="#94a6ca" className="h-4 w-4" />
            <span className="font-bold">Hide</span>
          </div>
          <div className="flex space-x-2 items-center text-xs hover:bg-gray-200 cursor-pointer p-2 rounded-md">
            <Icon name="report" color="#94a6ca" className="h-4 w-4" />
            <span className="font-bold">Report</span>
          </div>
        </div>
        <div className="flex flex-col">
          {comments?.map((x, i) => (
            <div key={i} className="flex flex-col">
              {x.content}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
