import { User } from "./user";

export interface Post {
  title: string;
  author: User;
  id: number;
  upvotes: number;
  comments: number;
  timeStamp: number;
}