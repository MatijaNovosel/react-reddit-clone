import { Container } from "inversify";
import "reflect-metadata";
import { PostService } from "./services/api/postService";
import { IPostService } from "./services/interfaces/postService";
import { SubRedditService } from "./services/api/subRedditService";
import { ISubRedditService } from "./services/interfaces/subRedditService";
import { CommentService } from "./services/api/commentService";
import { ICommentService } from "./services/interfaces/commentService";

export class Types {
  static readonly PostService = Symbol("IPostService");
  static readonly SubRedditService = Symbol("ISubRedditService");
  static readonly CommentService = Symbol("ICommentService");
}

const DIContainer = new Container();

DIContainer.bind<IPostService>(Types.PostService).toConstantValue(
  new PostService()
);

DIContainer.bind<ISubRedditService>(Types.SubRedditService).toConstantValue(
  new SubRedditService()
);

DIContainer.bind<ICommentService>(Types.CommentService).toConstantValue(
  new CommentService()
);

export function getService<T>(symbol: symbol): T {
  return DIContainer.get<T>(symbol);
}

export default DIContainer;
