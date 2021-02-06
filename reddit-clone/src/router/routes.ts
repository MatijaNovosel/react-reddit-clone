import { RouteProps } from "react-router-dom";
import { Main } from "../views/Main";
import { PostDetails } from "../views/PostDetails";

export const routes: RouteProps[] = [{
  exact: true,
  component: Main,
  path: "/" 
}, {
  exact: true,
  path: "/comments/:id",
  component: PostDetails
}];