import {Dispatch} from "redux";
import {
  STARWARS_FAIL,
  STARWARS_LOADING, STARWARS_RESOURCES,
  STARWARS_SUCCESS_PEOPLE,
  STARWARS_SUCCESS_PLAYERS,
  STARWARS_SUCCESS_STARSHIP,
  StarwarsDispatchTypes, StarwarsRequestTwoPlayerType,
  StarwarsRequestType, StarwarsResourceType
} from "./StarwarsActionsType";
import axios from "axios";
import {getNumberFromUrl} from "../../utils/utils";

export const GetAllResources = () => async (dispatch: Dispatch<StarwarsDispatchTypes>) => {

  try {

    let people: any[] = []
    let starships: any[] = []

    const peopleAcceptedNumber = await axios.get(`${process.env.REACT_APP_STARWARS_API}/people`)
      .then( res => {
        people = res.data.results
        return res.data.count
      })
      .then (count => {
        const numberOfPagesLeft = Math.ceil((count - 1) / 10);
        let promises = [];
        for (let i = 2; i <= numberOfPagesLeft; i++) {
          promises.push(axios(`${process.env.REACT_APP_STARWARS_API}/people?page=${i}`));
        }
        return Promise.all(promises);
      })
      .then(response => {
        people = response.reduce((a, data) => [...a, ...data.data.results], people)
        return people.map((x: StarwarsResourceType) => getNumberFromUrl(x.url))
      })

    const starshipsAcceptedNumber = await axios.get(`${process.env.REACT_APP_STARWARS_API}/starships`)
      .then( res => {
        starships = res.data.results
        return res.data.count
      })
      .then((count) => {
        const numberOfPagesLeft = Math.ceil((count - 1) / 10);
        let promises = [];
        for (let i = 2; i <= numberOfPagesLeft; i++) {
          promises.push(axios(`${process.env.REACT_APP_STARWARS_API}/starships?page=${i}`));
        }
        return Promise.all(promises);
      })
      .then(response => {
        starships = response.reduce((a, data) => [...a, ...data.data.results], starships)
        return starships.map((x: StarwarsResourceType) => getNumberFromUrl(x.url))
      })

    dispatch({
      type: STARWARS_RESOURCES,
      payload: {
        acceptedNumberPeople: peopleAcceptedNumber,
        acceptedNumberStarships: starshipsAcceptedNumber
      }
    })

  } catch (e) {
    console.error(e)
  }

}

export const GetTwoStarwarsPlayer = (starwars: StarwarsRequestTwoPlayerType) => async (dispatch: Dispatch<StarwarsDispatchTypes>) => {

  try {
    dispatch({
      type: STARWARS_LOADING
    })

    const selected = ['people', 'starships']


    let {firstPlayerType, secondPlayerType} = starwars

    const selectedFirstPlayer = firstPlayerType === 'all' ? selected[Math.round(Math.random() * 1)] : firstPlayerType
    const selectedSecondPlayer = secondPlayerType === 'all' ? selected[Math.round(Math.random() * 1)] : secondPlayerType


    const firstPlayer = await
      axios.get(`${process.env.REACT_APP_STARWARS_API}/${selectedFirstPlayer}/${Math.round(Math.random() * 80) + 1}`)
      .then( res => res.data )

    const secondPlayer = await
      axios.get(`${process.env.REACT_APP_STARWARS_API}/${selectedSecondPlayer}/${Math.round(Math.random() * 30) + 1}`)
      .then( res => res.data )

    dispatch({
      type: STARWARS_SUCCESS_PLAYERS,
      payload: {
        firstPlayer,
        secondPlayer
      }
    })

  } catch (e) {

    console.log(e)

    dispatch({
      type: STARWARS_FAIL,
      payload: {
        message: e.response ? e.response.data : 'CORS'
      }
    })
  }

}


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
      type: STARWARS_FAIL,
      payload: {
        message: e.message
      }
    })
    console.error(e.body)
  }
}
