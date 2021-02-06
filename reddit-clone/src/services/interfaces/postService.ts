import { Post } from "../../models/post";

export interface IPostService {
  getPosts(): Promise<Post[]>;
  getPostDetails(id: number): Promise<Post>;
}