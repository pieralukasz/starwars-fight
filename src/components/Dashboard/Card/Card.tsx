import React, { useEffect, useState} from "react";
import {Card} from "@material-ui/core";
import { Select, MenuItem } from '@material-ui/core';
import {CirclePoints} from "./CirclePoints";
import styled from "styled-components";
import {StarwarsPeopleMass, StarwarsRequestEnum, StarwarsStarshipCrew} from "../../../actions/StarWars/StarwarsActionsType";
import {CardItemInside} from "./CardItemInside";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../../store";
import {setActiveSelect} from "../../../actions/Select/SelectActions";


type CardExtProps = {
  isActive: boolean
  position: string
  player: StarwarsPeopleMass | StarwarsStarshipCrew | undefined
}

export const CardExt: React.FC<CardExtProps> = (props) => {

  const { player } = props

  const dispatch = useDispatch()

  const [playerDefault, setPlayerDefault] = useState<StarwarsRequestEnum>(StarwarsRequestEnum.PEOPLE)

  const [firstSelect, setFirstSelect] = useState('all')

  const [secondSelect, setSecondSelect] = useState('all')

  const selectState = useSelector((state: RootStoreType) => state.select)

  useEffect(() => {
      if (selectState.firstSelect !== undefined) {
        setFirstSelect(selectState.firstSelect)
      }
      if (selectState.secondSelect !== undefined) {
        setSecondSelect(selectState.secondSelect)
      }
  }, [selectState.firstSelect, selectState.secondSelect])

  const updateValue = (e: object | any): void => {
    const { value, name } = e.target
    console.log('elo')
    dispatch(setActiveSelect({value, select: name}))
  }

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

  return (
    <CardExtStyle>
      {player ? <InfoInside>
        <div>
          <CardItemInside title={'Type'} description={isPeople() ? 'people' : 'starship'}/>
        </div>
        <div>
          <CardItemInside
            title='Name'
            description={player?.name}
          />
        </div>
        <div>
          <CardItemInside
            title={isPeople() ? 'mass' : 'crew'}
            description={isPeople() ? checkIfUnknown(player?.mass) : checkIfUnknown(player?.crew)}
          />
        </div>
      </InfoInside> : <QuestionMark>?</QuestionMark>}
      {props.position === 'left' ?
        <SelectExpLeft name={'left'} value={firstSelect} onChange={updateValue}>
          <MenuItemExp value={'all'}>ALL</MenuItemExp>
          <MenuItemExp value={'people'}>people</MenuItemExp>
          <MenuItemExp value={'starships'}>starships</MenuItemExp>
        </SelectExpLeft> :
        <SelectExpRight name={'right'} value={secondSelect} onChange={updateValue}>
          <MenuItemExp value={'all'}>ALL</MenuItemExp>
          <MenuItemExp value={'people'}>people</MenuItemExp>
          <MenuItemExp value={'starships'}>starships</MenuItemExp>
        </SelectExpRight>}
      <CirclePoints position={props.position}>
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

const SelectExpLeft = styled(Select)`

  position: absolute !important;
  left: 5%;
  bottom: 2%;
  font-family: JediFont, serif !important;
  color: #cecece !important;

`

const SelectExpRight = styled(Select)`

  position: absolute !important;
  right: 5%;
  bottom: 2%;
  font-family: JediFont, serif !important;
  color: #cecece !important;

`

const MenuItemExp = styled(MenuItem)`
  font-family: JediFont, serif !important;

`




