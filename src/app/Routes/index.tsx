import { Route, Switch } from "react-router-dom";

import { HomeComponent, SearchComponent } from "../Components";


const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/search" component={SearchComponent} />
      </Switch>
    </>
  );
};

export default Routes;
