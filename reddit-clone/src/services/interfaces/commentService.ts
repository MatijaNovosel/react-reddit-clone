import { Comment } from './../../models/comment';

export interface ICommentService {
  getCommentsForPost(postId: number): Promise<Comment[]>;
}