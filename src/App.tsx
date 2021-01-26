import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./store";
import { GetTwoStarwarsPlayer } from "./actions/StarwarsActions";
import {Background} from "./components/Background";
import {Navigation} from "./components/Navigation/Navigation";

const App: React.FC = () => {

  const dispatch = useDispatch()
  const starwarsState = useSelector((state: RootStoreType) => state.starwars)

  const [firstPlayer, setFirstPlayer] = useState("")
  const [secondPlayer, setSecondPlayer] = useState("")

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await dispatch(GetTwoStarwarsPlayer())
  }

  useEffect(() => {
    if (starwarsState.firstPlayer && starwarsState.secondPlayer) {
      setFirstPlayer(starwarsState.firstPlayer.name)
      setSecondPlayer(starwarsState.secondPlayer.name)
    }
  }, [starwarsState])

  return (
    <Background>
      <Router>
      <Navigation />

      </Router>
      {/*<button onClick={handleSubmit}>Submit</button>*/}
      {/*<div>{firstPlayer}</div>*/}
      {/*<div>{secondPlayer}</div>*/}
    </Background>
  );
}

export default App;
