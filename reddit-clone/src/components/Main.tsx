import { TopCard } from "./TopCard";
import { PostCard } from "./PostCard";
import { randInt } from "../helpers/helpers";

export function Main() {
  return (
    <main className="container mx-auto pt-5 gap-5 grid grid-cols-12 mb-10">
      <div className="col-span-9">
        <TopCard />
        <div className="flex flex-col space-y-3">
          {[...Array.from(new Array(20), (x, i) => i)].map(() => <PostCard upvotes={randInt(500, 40000)} postTitle="Post title" />)}
        </div>
      </div>
      <div className="col-span-3">
        <TopCard />
      </div>
    </main>
  );
}