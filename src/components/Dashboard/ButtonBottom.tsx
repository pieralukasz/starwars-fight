import React, {useEffect, useState} from "react";
import {BaseButton} from "./BaseButton";
import {useDispatch, useSelector} from "react-redux";
import { GetTwoStarwarsPlayer } from "../../actions/StarWars/StarwarsActions";
import {RootStoreType} from "../../store";
import {resetAllPoints} from "../../actions/Points/PointsAction";
import {useTranslation} from "react-i18next";

export const ButtonBottom: React.FC = () => {

  const { t } = useTranslation()

  const dispatch = useDispatch()

  const starwarsState = useSelector((state: RootStoreType) => state.starwars)
  const selectState = useSelector((state: RootStoreType) => state.select)
  const [blockButton, setBlockButton] = useState(false)

  const ResetAllPoints = () => {
    dispatch(resetAllPoints())
  }

  const generateRandomPlayer = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<any> => {

    e.preventDefault()

    // first load all data becouse some id is invalid
    if (!starwarsState.loading) {
      const {firstSelect, secondSelect} = selectState

      const dispatchData = {
        firstPlayerType: firstSelect,
        secondPlayerType: secondSelect,
        acceptedStarshipsNumber: starwarsState.acceptedNumberStarships,
        acceptedPeopleNumber: starwarsState.acceptedNumberPeople
      }

      try {
        setBlockButton(true)
        await dispatch(GetTwoStarwarsPlayer(dispatchData))
      } catch (e) {
        console.error(e)
      } finally {
        setTimeout(() => {
          setBlockButton(false)
        }, 800)
      }
    }

  }

  useEffect(() => {
    if ((starwarsState.message && starwarsState.message === 'Not found') || starwarsState.message === 'CORS') {
      const {firstSelect, secondSelect} = selectState

      dispatch(GetTwoStarwarsPlayer({firstPlayerType: firstSelect, secondPlayerType: secondSelect}))
    }
  })

  return (
    <>
      <BaseButton
        backgroundColor={'#e74c3c'}
        hover={'#e36a5e'}
        fontColor={'white'}
        percent={21}
        position={'left'}
        action={ResetAllPoints}>
        {t("reset")}
      </BaseButton>
      <BaseButton
        fontColor={'black'}
        backgroundColor={'#FFFF00'}
        hover={'#f8f883'}
        position={'right'}
        percent={35}
        action={generateRandomPlayer}
        disabled={blockButton}
      >
        {t("play_button")}
      </BaseButton>
      {/*<Link to={'/stats'}>*/}
      {/*  <BaseButton*/}
      {/*    fontColor={'white'}*/}
      {/*    backgroundColor={'#8B1FA7'}*/}
      {/*    position={'right'}*/}
      {/*    percent={-6}*/}
      {/*  >*/}
      {/*    history*/}
      {/*  </BaseButton>*/}
      {/*</Link>*/}
    </>
  )
}
