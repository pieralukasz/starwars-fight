import { CardExt } from "./Card";
import React, { useState, useEffect }  from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { RootStoreType } from "../../../store";
import {
  StarwarsPeopleMass,
  StarwarsRequestEnum,
  StarwarsStarshipCrew
} from "../../../actions/StarWars/StarwarsActionsType";
import {checkIfUnknown} from "../../../utils/utils";
import {setNewPoints} from "../../../actions/Points/PointsAction";

interface PointsType {
  firstPlayer: number | string | undefined
  secondPlayer: number | string | undefined
}

export const CardContainer: React.FC = () => {

  const dispatch = useDispatch()

  const { t } = useTranslation()

  const starwarsState = useSelector((state: RootStoreType) => state.starwars)
  const pointsState = useSelector((state: RootStoreType) => state.points)

  const [firstPlayer, setFirstPlayer] = useState<StarwarsPeopleMass | StarwarsStarshipCrew | undefined>(undefined)
  const [secondPlayer, setSecondPlayer] = useState<StarwarsPeopleMass | StarwarsStarshipCrew | undefined>(undefined)


  useEffect(() => {
    if (starwarsState.firstPlayer && starwarsState.secondPlayer) {
      setFirstPlayer(starwarsState.firstPlayer)
      setSecondPlayer(starwarsState.secondPlayer)
      checkWinner()
    }


  }, [starwarsState])

  const checkWinner = () => {
    const first = starwarsState.firstPlayer
    const second = starwarsState.secondPlayer
    let firstPoints = 0
    let secondPoints = 0

    const firstCheck = first?.mass ? StarwarsRequestEnum.PEOPLE : StarwarsRequestEnum.STARSHIPS
    firstPoints = firstCheck === StarwarsRequestEnum.PEOPLE ? checkIfUnknown(first?.mass) : checkIfUnknown(first?.crew)

    const secondCheck = second?.mass ? StarwarsRequestEnum.PEOPLE : StarwarsRequestEnum.STARSHIPS
    secondPoints = secondCheck === StarwarsRequestEnum.PEOPLE ? checkIfUnknown(second?.mass) : checkIfUnknown(second?.crew)


    if (firstPoints > secondPoints) {
      dispatch(setNewPoints({
        firstPlayerWin: true,
        secondPlayerWin: false
      }))
    } else if (firstPoints < secondPoints) {
      dispatch(setNewPoints({
        firstPlayerWin: false,
        secondPlayerWin: true
      }))
    } else {
      dispatch(setNewPoints({
        firstPlayerWin: false,
        secondPlayerWin: false
      }))
    }
  }

  return (
    <CardContainerStyle>
      <CardExt
        isActive={false}
        position={'left'}
        player={ firstPlayer }
        points={ pointsState.firstSelect }
       />
      <VSStyle>vs</VSStyle>
      <CardExt
        isActive={false}
        position={'right'}
        player={ secondPlayer }
        points={ pointsState.secondSelect }
      />
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
