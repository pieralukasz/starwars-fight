import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GenerateRouter from "./routes/Router";
import routes from "./routes";
import { Background } from "./components/Background";
import { Navigation } from "./components/Navigation/Navigation";
import { LangPicker } from "./components/Lang";
import "./i18n";
import { useDispatch } from "react-redux";
import { GetAllResources } from "./actions/StarWars/StarwarsActions";
import { getRandomUuid } from "./utils/utils";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllResources());
    setFirstUuid();
  });

  // fake auth for database
  const setFirstUuid = () => {
    if (!localStorage.getItem("swapi-uuid")) {
      localStorage.setItem("swapi-uuid", getRandomUuid());
    }
  };

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
};

export default App;
