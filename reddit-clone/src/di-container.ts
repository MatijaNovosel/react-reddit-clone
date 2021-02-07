import { Container } from "inversify";
import "reflect-metadata";
import { PostService } from "./services/api/postService";
import { IPostService } from "./services/interfaces/postService";
import { SubRedditService } from "./services/api/subRedditService";
import { ISubRedditService } from "./services/interfaces/subRedditService";

export class Types {
  static readonly PostService = Symbol("IPostService");
  static readonly SubRedditService = Symbol("ISubRedditService");
}

const DIContainer = new Container();

DIContainer.bind<IPostService>(Types.PostService).toConstantValue(
  new PostService()
);

DIContainer.bind<ISubRedditService>(Types.SubRedditService).toConstantValue(
  new SubRedditService()
);

export function getService<T>(symbol: symbol): T {
  return DIContainer.get<T>(symbol);
}

export default DIContainer;
