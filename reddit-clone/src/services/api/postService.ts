import axios from "axios";
import { Post } from "../../models/post";
import { IPostService } from "../interfaces/postService";
import { config } from "../../config/config";

export class PostService implements IPostService {
  async getPosts(): Promise<Post[]> {
    const { data } = await axios.get(`${config.API_ROUTES}/posts`);
    return data;
  }
}