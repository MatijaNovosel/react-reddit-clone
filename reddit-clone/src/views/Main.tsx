import { TopCard } from "../components/TopCard/TopCard";
import { PostCard } from "../components/PostCard";
import { useEffect, useState } from "react";
import { config } from "../config/config";
import { Post } from "../models/post";
import { TrendingCard } from "../components/TrendingCard";
import { GrowingCommunityCard } from "../components/GrowingCommunityCard";

export function Main() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${config.API_ROUTES}posts`)
      .then((res) => res.json())
      .then((result) => setPosts(result));
  }, []);

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
          <div className="flex flex-col space-y-3">
            {posts.map((post, i) => (
              <PostCard key={i} post={post} />
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <GrowingCommunityCard />
        </div>
      </div>
    </main>
  );
}
