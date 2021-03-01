import React from "react";
import { Switch, Route } from "react-router-dom";
import Authentication from "../components/Topbar/Authentication/Authentication";
import Article from "./article/article";
import GlobalFeed from "./globalFeed/globalFeed";

 const Routes= () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route  path="/login" component={Authentication} />
      <Route  path="/register" component={Authentication} />
      <Route  path="/" component={GlobalFeed} />
      <Route path="/arcticles/:slug" component={Article} />
    </Switch>
  );
};
export default Routes