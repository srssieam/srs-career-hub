import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
      <h1 className="text-6xl text-red-700">Oops!</h1>
      <p className="text-3xl my-3">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to ="/"><button className="btn btn-error mt-3">Back to Home</button></Link>
      </div>
    </div>
  );
}
