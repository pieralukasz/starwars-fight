import {Dispatch} from "redux";
import {
  STARWARS_FAIL,
  STARWARS_LOADING,
  STARWARS_SUCCESS_PEOPLE,
  STARWARS_SUCCESS_PLAYERS,
  STARWARS_SUCCESS_STARSHIP,
  StarwarsDispatchTypes,
  StarwarsRequestType
} from "./StarwarsActionsType";
import axios from "axios";

export const GetStarwars = (starwars: StarwarsRequestType) => async (dispatch: Dispatch<StarwarsDispatchTypes>) => {

  const { player, id } = starwars

  try {
    dispatch({
      type: STARWARS_LOADING
    })

    const response = await axios.get(`${process.env.REACT_APP_STARWARS_API}/${player}/${id}`)
      .then( res => res.data )

    if (player === 'people') {
      dispatch({
        type: STARWARS_SUCCESS_PEOPLE,
        payload: {
          people: response
        }
      })
    } else {
      dispatch({
        type: STARWARS_SUCCESS_STARSHIP,
        payload: {
          starship: response
        }
      })
    }

  } catch (e) {
    dispatch({
      type: STARWARS_FAIL
    })
    console.error(e.message)
  }
}


export const GetTwoStarwarsPlayer = () => async (dispatch: Dispatch<StarwarsDispatchTypes>) => {

  try {
    dispatch({
      type: STARWARS_LOADING
    })

    const firstPlayer = await
      axios.get(`${process.env.REACT_APP_STARWARS_API}/${'people'}/${Math.round(Math.random() * 20)}`)
      .then( res => res.data )

    const secondPlayer = await
      axios.get(`${process.env.REACT_APP_STARWARS_API}/${'people'}/${Math.round(Math.random() * 20)}`)
      .then( res => res.data )

    dispatch({
      type: STARWARS_SUCCESS_PLAYERS,
      payload: {
        firstPlayer,
        secondPlayer
      }
    })

  } catch (e) {
    dispatch({
      type: STARWARS_FAIL
    })
    console.error(e.message)
  }

}
