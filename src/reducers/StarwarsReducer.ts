import {
  STARWARS_FAIL,
  STARWARS_LOADING,
  STARWARS_RESOURCES,
  STARWARS_SUCCESS_PEOPLE,
  STARWARS_SUCCESS_PLAYERS,
  STARWARS_SUCCESS_STARSHIP,
  StarwarsDispatchTypes,
  StarwarsPeopleMass,
  StarwarsStarshipCrew
} from "../actions/StarWars/StarwarsActionsType";

interface DefaultStateType {
  loading: boolean,
  starship?: StarwarsStarshipCrew,
  people?: StarwarsPeopleMass,
  firstPlayer?: StarwarsStarshipCrew | StarwarsPeopleMass,
  secondPlayer?: StarwarsStarshipCrew | StarwarsPeopleMass,
  message?: string,
  acceptedNumberStarships?: number[] | [],
  acceptedNumberPeople?: number[] | []
}


const defaultState: DefaultStateType = {
  loading: false
};

const starwarsReducer = (state: DefaultStateType = defaultState, action: StarwarsDispatchTypes): DefaultStateType => {

  switch (action.type) {
    case STARWARS_FAIL:
      return {
        loading: true,
        message: action.payload.message.detail,
        acceptedNumberStarships: state.acceptedNumberStarships,
        acceptedNumberPeople: state.acceptedNumberPeople
      }
    case STARWARS_LOADING:
      return {
        loading: true,
        acceptedNumberStarships: state.acceptedNumberStarships,
        acceptedNumberPeople: state.acceptedNumberPeople
      }
    case STARWARS_SUCCESS_STARSHIP:
      return {
        loading: false,
        starship: {...action.payload.starship},
        acceptedNumberStarships: state.acceptedNumberStarships,
        acceptedNumberPeople: state.acceptedNumberPeople
      }
    case STARWARS_SUCCESS_PEOPLE:
      return {
        loading: false,
        people: {...action.payload.people},
        acceptedNumberStarships: state.acceptedNumberStarships,
        acceptedNumberPeople: state.acceptedNumberPeople
      }
    case STARWARS_SUCCESS_PLAYERS:
      return {
        loading: false,
        firstPlayer: {...action.payload.firstPlayer},
        secondPlayer: {...action.payload.secondPlayer},
        acceptedNumberStarships: state.acceptedNumberStarships,
        acceptedNumberPeople: state.acceptedNumberPeople
      }
    case STARWARS_RESOURCES:
      console.log(action.payload.acceptedNumberPeople)
      return {
        loading: false,
        acceptedNumberStarships: action.payload.acceptedNumberStarships,
        acceptedNumberPeople: action.payload.acceptedNumberPeople
      }
    default:
      return state
  }
}

export default starwarsReducer

