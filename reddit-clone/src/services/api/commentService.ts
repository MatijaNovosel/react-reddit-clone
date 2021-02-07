import { Comment } from "./../../models/comment";
import { ICommentService } from "./../interfaces/commentService";
import axios from "axios";
import { config } from "../../config/config";

export class CommentService implements ICommentService {
  async getCommentsForPost(postId: number): Promise<Comment[]> {
    const { data } = await axios.get(`${config.API_ROUTES}/comments`, {
      params: {
        postId
      }
    });
    return data;
  }
}
