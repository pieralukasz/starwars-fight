import React from "react";
// @ts-ignore
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk"
import { STARWARS_RESOURCES} from "../actions/StarWars/StarwarsActionsType";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
// console.log("App rendering")
describe("render App component", () => {

  it("check action on dispatching", () => {
    const store = mockStore(middlewares)
    store.dispatch({
      type: STARWARS_RESOURCES
    })
    const actions = store.getActions()
    expect(actions[0].type).toBe(STARWARS_RESOURCES)
  })

});
