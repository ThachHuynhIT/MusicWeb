import Home from "../pages/Home";
import Album from "../pages/Album";
import AllAlbum from "../pages/AllAlbum";

import SearchAll from "../pages/SearchAll";
import SearchSong from "../pages/SearchSong";

import DefaultUserLayout from "../components/Layouts/DefaultUserLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import DefaultAccountLayout from "../components/Layouts/DefaultAccountLayout";
import Infor from "../pages/Infor";
import Edit from "../pages/Edit";

const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/album", component: Album },
  { path: "/album/:type/all", component: AllAlbum },
  { path: "/search/:name/all", component: SearchAll },
  { path: "/search/:name/all", component: SearchAll },
  { path: "/search/:name/song", component: SearchSong },
  { path: "/album/:id", component: Album },
  { path: "/user/login", component: Login, layout: DefaultUserLayout },
  { path: "/user/register", component: Register, layout: DefaultUserLayout },
  { path: "/account/infor", component: Infor, layout: DefaultAccountLayout },
  { path: "/account/edit", component: Edit, layout: DefaultAccountLayout },
];
const Private = [
  { path: "/", component: Home },
  { path: "/album", component: Album },
  { path: "/album/:type/all", component: AllAlbum },
  { path: "/search/:name/all", component: SearchAll },
  { path: "/search/:name/all", component: SearchAll },
  { path: "/search/:name/song", component: SearchSong },
  { path: "/album/:id", component: Album },
  { path: "/user/login", component: Login, layout: DefaultUserLayout },
  { path: "/user/register", component: Register, layout: DefaultUserLayout },
  { path: "/account/infor", component: Infor, layout: DefaultAccountLayout },
  { path: "/account/edit", component: Edit, layout: DefaultAccountLayout },
];

export { PublicRoutes, Private };
