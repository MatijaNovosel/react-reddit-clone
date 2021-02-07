import { TopCard } from "../components/TopCard/TopCard";
import { PostCard } from "../components/PostCard";
import { useCallback, useEffect, useState } from "react";
import { Post } from "../models/post";
import { TrendingCard } from "../components/TrendingCard";
import { Icon } from "../components/Icon";
import { GrowingCommunityCard } from "../components/GrowingCommunityCard/GrowingCommunityCard";
import { getService, Types } from "../di-container";
import { IPostService } from "../services/interfaces/postService";

export function Main() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setPosts(await getService<IPostService>(Types.PostService).getPosts());
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <main className="container mx-auto pt-5 mb-10 flex flex-col">
      <span className="mb-2 text-xl font-bold">Trending today</span>
      <div className="grid grid-cols-3 gap-5">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
      <span className="mb-2 mt-6 text-xl font-bold">Popular posts</span>
      <div className="gap-5 grid grid-cols-12">
        <div className="col-span-9 flex flex-col">
          <TopCard />
          {loading ? (
            <div className="flex justify-center mt-6">
              <Icon
                name="loading"
                className="animate-spin w-16 h-16"
                color="#000000"
              />
            </div>
          ) : (
            <div className="flex flex-col space-y-3">
              {posts.map((post, i) => (
                <PostCard key={i} post={post} />
              ))}
            </div>
          )}
        </div>
        <div className="col-span-3">
          <GrowingCommunityCard />
        </div>
      </div>
    </main>
  );
}
