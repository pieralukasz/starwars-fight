import React, {useEffect} from "react";
import {BaseButton} from "../BaseButton";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GetAllResources, GetTwoStarwarsPlayer} from "../../../actions/StarWars/StarwarsActions";
import {RootStoreType} from "../../../store";

export const ButtonBottom: React.FC = () => {

  const dispatch = useDispatch()

  const starwarsState = useSelector((state: RootStoreType) => state.starwars)
  const selectState = useSelector((state: RootStoreType) => state.select)

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

      await dispatch(GetTwoStarwarsPlayer(dispatchData))
    }



  }

  useEffect(() => {
    if ((starwarsState.message && starwarsState.message === 'Not found') || starwarsState.message === 'CORS') {
      const {firstSelect, secondSelect} = selectState

      dispatch(GetTwoStarwarsPlayer({firstPlayerType: firstSelect, secondPlayerType: secondSelect}))
    }
  }, [starwarsState])

  return (
    <>
      <BaseButton
        fontColor={'black'}
        backgroundColor={'yellow'}
        position={'left'}
        percent={50}
        action={generateRandomPlayer}
        disabled={starwarsState.loading}
      >
        generate random players
      </BaseButton>
      <Link to={'/stats'}>
        <BaseButton
          fontColor={'white'}
          backgroundColor={'#8B1FA7'}
          position={'right'}
          percent={-6}
        >
          history
        </BaseButton>
      </Link>
    </>
  )
}
