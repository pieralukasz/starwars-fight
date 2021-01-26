import React from "react";
import {BaseButton} from "../BaseButton";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import {GetTwoStarwarsPlayer} from "../../../actions/StarwarsActions";

export const ButtonBottom: React.FC = () => {

  const dispatch = useDispatch()


  const generateRandomPlayer = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<any> => {
    e.preventDefault()
    await dispatch(GetTwoStarwarsPlayer())
  }

  return (
    <>
      <BaseButton
        fontColor={'black'}
        backgroundColor={'yellow'}
        position={'left'}
        percent={50}
        action={generateRandomPlayer}
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
