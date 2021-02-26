import { User } from "./user";

export interface Comment {
  id: number;
  parentId: number | null;
  postId: number;
  content: string;
  upvotes: number;
  author: User;
  timeStamp: number;
  children?: Comment[];
}
