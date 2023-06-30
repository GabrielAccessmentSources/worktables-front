import React from "react";
import { Router, Route } from "react-router-dom";

import history from "./history";
import Home from "./views/Home";


const App = () =>  {

    return(
        <>
         <Router history={history}>
            <Route path="/" exact component={Home} />
         </Router>
        </>
    );
};

export default App;
