import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Router = () => {
    return (

     <BrowserRouter>
    <Switch>
        <Route exat path="/">
            Home
        </Route>
        </Switch>
        </BrowserRouter>
    );
};

export default Router;