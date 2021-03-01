import React from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./article/article";
import GlobalFeed from "./globalFeed/globalFeed";

 const Routes= () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route path="/arcticles/:slug" component={Article} />
    </Switch>
  );
};
export default Routes