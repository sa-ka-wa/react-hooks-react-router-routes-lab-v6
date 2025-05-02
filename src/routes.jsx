import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <NotFound />,
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <NotFound />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
