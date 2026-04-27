import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // Keep this to see the real error in your F12 console

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6 text-center">
      <span className="text-stone-400 uppercase tracking-[0.4em] text-xs mb-4">
        Error {error.status || "404"}
      </span>

      <h1 className="text-3xl md:text-4xl font-serif italic text-stone-800 mb-6">
        Something went wrong
      </h1>

      <p className="text-stone-500 font-light max-w-md mb-10 leading-relaxed">
        The page you are looking for might have been moved, or there is a small
        hiccup in the brew.
      </p>

      <Link
        to="/"
        className="px-8 py-3 border border-stone-300 text-stone-600 text-sm tracking-widest uppercase hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-500"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
