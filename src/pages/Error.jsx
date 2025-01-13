import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}