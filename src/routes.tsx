import {
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";

// Define routes normally
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
    errorElement: <Error />,
  },
  {
    path: "/bookmarks",
    element: <Bookmark />,
    errorElement: <Error />,
  },
];

// ✅ Set basename depending on environment
const basename =
  process.env.NODE_ENV === "production"
    ? "/movie-application"
    : "/";

export const router = createBrowserRouter(routes, {
  basename,
});
