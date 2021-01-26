import {CardExt} from "./Card";
import React from "react";
import styled from "styled-components";
// import {useDispatch, useSelector} from "react-redux";
// import {RootStoreType} from "../../../store";
// import {GetTwoStarwarsPlayer} from "../../../actions/StarwarsActions";



export const CardContainer: React.FC = () => {

  // const dispatch = useDispatch()
  // const starwarsState = useSelector((state: RootStoreType) => state.starwars)
  //
  // const [firstPlayer, setFirstPlayer] = useState("")
  // const [secondPlayer, setSecondPlayer] = useState("")
  //
  // const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault()
  //   await dispatch(GetTwoStarwarsPlayer())
  // }

  // useEffect(() => {
  //   if (starwarsState.firstPlayer && starwarsState.secondPlayer) {
  //     setFirstPlayer(starwarsState.firstPlayer.name)
  //     setSecondPlayer(starwarsState.secondPlayer.name)
  //   }
  // }, [starwarsState])


  return (
    <CardContainerStyle>
      <CardExt isActive={true}>1 Player</CardExt>
      <VSStyle>vs</VSStyle>
      <CardExt isActive={false}>2 Player</CardExt>
    </CardContainerStyle>
 )
}

const CardContainerStyle = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-between;
`

const VSStyle = styled.div`
  color: yellow;
  font-size: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`
