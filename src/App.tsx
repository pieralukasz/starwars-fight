import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./store";
import {GetStarwars, GetTwoStarwarsPlayer} from "./actions/StarwarsActions";

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
    <div className="App">
      <button onClick={handleSubmit}>Submit</button>
      <div>{firstPlayer}</div>
      <div>{secondPlayer}</div>
    </div>
  );
}

export default App;
