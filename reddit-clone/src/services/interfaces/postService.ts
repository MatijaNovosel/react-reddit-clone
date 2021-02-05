import { Post } from "../../models/post";

export interface IPostService {
  getPosts(): Promise<Post[]>;
}