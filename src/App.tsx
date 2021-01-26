import React, {useEffect, useState} from 'react';
import {RootStoreType} from "./store";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import GenerateRouter from './routes/Router'
import routes from "./routes";
import {useDispatch, useSelector} from "react-redux";

import { GetTwoStarwarsPlayer } from "./actions/StarwarsActions";
import {Background} from "./components/Background";
import {Navigation} from "./components/Navigation/Navigation";


const App: React.FC = () => {



  return (
    <Background>
      <Router>
        <Navigation />
        <Switch>
          {routes.map((route, i) => (
            <GenerateRouter key={i} {...route} />
          ))}
        </Switch>
      </Router>
      {/*<button onClick={handleSubmit}>Submit</button>*/}
      {/*<div>{firstPlayer}</div>*/}
      {/*<div>{secondPlayer}</div>*/}
    </Background>
  );
}

export default App;
