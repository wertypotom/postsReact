import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { AuthContext } from "../context/Context";
import { publicRouts, privateRouts } from "../router/routs";
import Preloader from "./UI/Preloader/Preloader";

function AppRouter() {
  const { isAuth, isLoading } = React.useContext(AuthContext);

  if (isLoading) {
    return <Preloader />;
  }

  return isAuth ? (
    <Switch>
      {publicRouts.map((item) => (
        <Route
          component={item.component}
          path={item.path}
          exact={item.exact}
          key={item.path}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {privateRouts.map((item) => (
        <Route
          component={item.component}
          path={item.path}
          exact={item.exact}
          key={item.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
}

export default AppRouter;
