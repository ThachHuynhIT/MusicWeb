import config from "../config";

import Home from "../pages/Home";

import Album from "../pages/Album";
import AllAlbum from "../pages/AllAlbum";

import SearchAll from "../pages/SearchAll";
import SearchSong from "../pages/SearchSong";
import SearchAlbum from "../pages/SearchAlbum";

import Infor from "../pages/Infor";
import Edit from "../pages/Edit";
import PlayList from "../pages/PlayList";

import Login from "../pages/Login";
import Register from "../pages/Register";

import DefaultUserLayout from "../components/Layouts/DefaultUserLayout";
import DefaultAccountLayout from "../components/Layouts/DefaultAccountLayout";

const PublicRoutes = [{ path: config.home, component: Home }];

const PrivateRoutes = [
  { path: config.album, component: Album },
  { path: config.allAlbum, component: AllAlbum },
  { path: config.playList, component: PlayList },

  { path: config.searchAll, component: SearchAll },
  { path: config.searchSong, component: SearchSong },
  { path: config.searchAlbum, component: SearchAlbum },

  { path: config.accoutInfor, component: Infor, layout: DefaultAccountLayout },
  { path: config.accoutEdit, component: Edit, layout: DefaultAccountLayout },
];
const AuthRoutes = [
  { path: config.userLogin, component: Login, layout: DefaultUserLayout },
  { path: config.userRegister, component: Register, layout: DefaultUserLayout },
];
export { PublicRoutes, PrivateRoutes, AuthRoutes };
