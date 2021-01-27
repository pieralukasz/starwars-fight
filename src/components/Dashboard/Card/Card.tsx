import React, { useEffect, useState} from "react";
import {Card} from "@material-ui/core";
import {CirclePoints} from "./CirclePoints";
import styled from "styled-components";
import {StarwarsPeopleMass, StarwarsRequestEnum, StarwarsStarshipCrew} from "../../../actions/StarwarsActionsType";
import {CardItemInside} from "./CardItemInside";


type CardExtProps = {
  isActive: boolean
  position: string
  player: StarwarsPeopleMass | StarwarsStarshipCrew | undefined
}

export const CardExt: React.FC<CardExtProps> = (props) => {

  const { player } = props

  const [ playerDefault, setPlayerDefault ] = useState<StarwarsRequestEnum>(StarwarsRequestEnum.PEOPLE)

  const isPeople = (): boolean => {
    return playerDefault === StarwarsRequestEnum.PEOPLE
  }

  const checkIfUnknown = (points: string | number | undefined): number => {
    if (points === 'Unknown' || points === 'unknown' || points === undefined) {
      return 0
    }
    return parseFloat(points.toString())
  }

  useEffect(() => {

    const check = player?.mass ? StarwarsRequestEnum.PEOPLE : StarwarsRequestEnum.STARSHIPS

    setPlayerDefault(check)

  }, [player])


  return  (
    <CardExtStyle>
      { player ? <InfoInside>
        <div>
          <CardItemInside title={'Type'} description={isPeople() ? 'people' : 'starship'} />
        </div>
        <div>
          <CardItemInside
            title='Name'
            description={ player?.name }
          />
        </div>
        <div>
          <CardItemInside
            title={ isPeople() ? 'mass' : 'crew' }
            description={ isPeople() ? checkIfUnknown(player?.mass) : checkIfUnknown(player?.crew) }
          />
        </div>
      </InfoInside> : <QuestionMark>?</QuestionMark>}
      <CirclePoints position={ props.position }>
        5
      </CirclePoints>
    </CardExtStyle>
  )
}

const CardExtStyle = styled(Card)`
  min-height: 350px;
  max-height: 350px;
  min-width: 350px;
  max-width: 350px;
  background-color: rgba(206, 206, 206, 0.6) !important;
  padding: 1rem;
  transition: .3s;
  font-size: 2rem;
  text-align: center;
  position: relative;
  overflow: visible !important;
  color: white !important;


  @media (max-width: 1200px) {
    max-height: 300px;
    min-width: 300px;
  }

`

const QuestionMark = styled.p`
  position: absolute;
  font-size: 14rem;
  color: rgba(255, 255, 255, 0.8);
  left: 50%;
  top: 1rem;
  transform: translate(-50%, -75%);
  width: 100%;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`

const InfoInside = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`




