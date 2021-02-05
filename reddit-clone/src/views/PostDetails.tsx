import { RouteComponentProps } from "react-router-dom";

type TParams = { id: string };

export function PostDetails({ match }: RouteComponentProps<TParams>) {
  return (
    <main className="container mx-auto pt-5 gap-5 grid grid-cols-12 mb-10">
      <h1>Details for post with id {match.params.id}</h1>
    </main>
  );
}