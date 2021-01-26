import React from 'react';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import GenerateRouter from './routes/Router'
import routes from "./routes";
import {Background} from "./components/Background";
import {Navigation} from "./components/Navigation/Navigation";
import {LangPicker} from "./components/Lang";
import './i18n'


const App: React.FC = () => {

  return (
    <Background>
      <LangPicker />
      <Router>
        <Navigation />
        <Switch>
          {routes.map((route, i) => (
            <GenerateRouter key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </Background>
  );
}

export default App;
