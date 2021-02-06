import { useCallback, useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { getService, Types } from "../di-container";
import { Post } from "../models/post";
import { Icon } from "../components/Icon";
import { IPostService } from "../services/interfaces/postService";

type TParams = { id: string };

export function PostDetails({ match }: RouteComponentProps<TParams>) {
  const [post, setPostDetails] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<TParams>();

  const fetchPostDetails = useCallback(async () => {
    setLoading(true);
    setPostDetails(
      await getService<IPostService>(Types.PostService).getPostDetails(
        parseInt(id)
      )
    );
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchPostDetails();
  }, [fetchPostDetails]);

  return loading ? (
    <div className="flex justify-center mt-6">
      <Icon name="loading" className="animate-spin w-16 h-16" color="#000000" />
    </div>
  ) : (
    <main className="container mx-auto pt-5 gap-5 grid grid-cols-12 mb-10">
      <h1>Details for post with id {id}</h1>
    </main>
  );
}
