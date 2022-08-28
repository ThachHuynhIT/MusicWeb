import Home from "../pages/Home";
import Album from "../pages/Album";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DefaultAccountLayout from "../components/Layouts/DefaultAccountLayout";

const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/album/:id", component: Album },
  { path: "/login", component: Login, layout: DefaultAccountLayout },
  { path: "/register", component: Register, layout: DefaultAccountLayout },
];

export { PublicRoutes };
