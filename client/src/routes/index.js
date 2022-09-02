import Home from "../pages/Home";
import Album from "../pages/Album";
<<<<<<< Updated upstream

import DefaultUserLayout from "../components/Layouts/DefaultUserLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import DefaultAccountLayout from "../components/Layouts/DefaultAccountLayout";
import Infor from "../pages/Infor";
import Edit from "../pages/Edit";

const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/album", component: Album },
  { path: "/user/login", component: Login, layout: DefaultUserLayout },
  { path: "/user/register", component: Register, layout: DefaultUserLayout },
  { path: "/account/infor", component: Infor, layout: DefaultAccountLayout },
  { path: "/account/edit", component: Edit, layout: DefaultAccountLayout },
=======
import Login from "../pages/Login";
import Register from "../pages/Register";
import DefaultAccountLayout from "../components/Layouts/DefaultAccountLayout";

const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/album/:id", component: Album },
  { path: "/login", component: Login, layout: DefaultAccountLayout },
  { path: "/register", component: Register, layout: DefaultAccountLayout },
>>>>>>> Stashed changes
];

export { PublicRoutes };
