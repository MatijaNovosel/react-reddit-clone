import { TopCard } from "./TopCard";
import { PostCard } from "./PostCard";
import { useEffect, useState } from "react";
import { config } from "../config/config";
import { Post } from "../models/post";

export function Main() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${config.API_ROUTES}posts`)
      .then(res => res.json())
      .then(result =>
        setPosts(result)
      );
  }, []);

  return (
    <main className="container mx-auto pt-5 gap-5 grid grid-cols-12 mb-10">
      <div className="col-span-9">
        <TopCard />
        <div className="flex flex-col space-y-3">
          {posts.map((post, i) => <PostCard key={i} post={post} />)}
        </div>
      </div>
      <div className="col-span-3">
        <TopCard />
      </div>
    </main>
  );
}