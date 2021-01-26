import React from 'react';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import GenerateRouter from './routes/Router'
import routes from "./routes";
import {Background} from "./components/Background";
import {Navigation} from "./components/Navigation/Navigation";
import {LangPicker} from "./components/Lang";


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
      {/*<button onClick={handleSubmit}>Submit</button>*/}
      {/*<div>{firstPlayer}</div>*/}
      {/*<div>{secondPlayer}</div>*/}
    </Background>
  );
}

export default App;
