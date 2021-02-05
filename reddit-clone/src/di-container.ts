import { Container } from "inversify";
import "reflect-metadata";
import { PostService } from "./services/api/postService";
import { IPostService } from "./services/interfaces/postService";

export class Types {
  static readonly PostService = Symbol("IPostService");
}

const DIContainer = new Container();

DIContainer.bind<IPostService>(Types.PostService).toConstantValue(
  new PostService()
);

export function getService<T>(symbol: symbol): T {
  return DIContainer.get<T>(symbol);
}

export default DIContainer;
