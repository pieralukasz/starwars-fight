import React, {useEffect} from "react";
import {BaseButton} from "../BaseButton";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GetTwoStarwarsPlayer} from "../../../actions/StarwarsActions";
import {RootStoreType} from "../../../store";

export const ButtonBottom: React.FC = () => {

  const dispatch = useDispatch()

  const starwarsState = useSelector((state: RootStoreType) => state.starwars)

  const generateRandomPlayer = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<any> => {
    e.preventDefault()
    await dispatch(GetTwoStarwarsPlayer())
  }

  useEffect(() => {
    if ((starwarsState.message && starwarsState.message === 'Not found') || starwarsState.message === 'CORS') {
      dispatch(GetTwoStarwarsPlayer())
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
