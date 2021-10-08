import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import SpecificPostID from "../pages/SpecificPostID";

export const publicRouts = [
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/posts",
    component: Posts,
    exact: true,
  },
  {
    path: "/posts/:id",
    component: SpecificPostID,
    exact: true,
  },
];

export const privateRouts = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];
