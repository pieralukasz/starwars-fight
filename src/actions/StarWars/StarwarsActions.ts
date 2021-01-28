import {Dispatch} from "redux";
import {
  STARWARS_FAIL,
  STARWARS_LOADING,
  STARWARS_RESOURCES,
  STARWARS_SUCCESS_PEOPLE,
  STARWARS_SUCCESS_PLAYERS,
  STARWARS_SUCCESS_STARSHIP,
  StarwarsDispatchTypes,
  StarwarsRequestTwoPlayerType,
  StarwarsRequestType,
  StarwarsResourceType
} from "./StarwarsActionsType";
import axios from "axios";
import {getNumberFromUrl, getRandomId} from "../../utils/utils";

export const GetAllResources = () => async (dispatch: Dispatch<StarwarsDispatchTypes>) => {

  dispatch({
    type: STARWARS_LOADING
  })

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
    console.log(starshipsAcceptedNumber)
    dispatch({
      type: STARWARS_RESOURCES,
      payload: {
        acceptedNumberPeople: peopleAcceptedNumber,
        acceptedNumberStarships: starshipsAcceptedNumber
      }
    })

    console.log('koniec pobierania')

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

    let {firstPlayerType, secondPlayerType, acceptedPeopleNumber, acceptedStarshipsNumber} = starwars



    const selectedFirstPlayer = firstPlayerType === 'all' ? selected[Math.round(Math.random() * 1)] : firstPlayerType
    const selectedSecondPlayer = secondPlayerType === 'all' ? selected[Math.round(Math.random() * 1)] : secondPlayerType

    let randomIdFirstPlayer = 0
    let randomIdSecondPlayer = 0

    if (firstPlayerType === 'people') {
      randomIdFirstPlayer = getRandomId(acceptedPeopleNumber)
    } else {
      randomIdFirstPlayer = getRandomId(acceptedStarshipsNumber)
    }

    if (secondPlayerType === 'people') {
      randomIdSecondPlayer = getRandomId(acceptedPeopleNumber)
    } else {
      randomIdSecondPlayer = getRandomId(acceptedStarshipsNumber)
    }

    const firstPlayer = await
      axios.get(`${process.env.REACT_APP_STARWARS_API}/${selectedFirstPlayer}/${randomIdFirstPlayer}`)
      .then( res => res.data )

    const secondPlayer = await
      axios.get(`${process.env.REACT_APP_STARWARS_API}/${selectedSecondPlayer}/${randomIdSecondPlayer}`)
      .then( res => res.data )

    dispatch({
      type: STARWARS_SUCCESS_PLAYERS,
      payload: {
        firstPlayer,
        secondPlayer,
        acceptedNumberPeople: acceptedPeopleNumber,
        acceptedNumberStarships: acceptedStarshipsNumber
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
