import React from "react";
import App from "../App";
// @ts-ignore
import configureMockStore from "redux-mock-store";

import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import { render } from "@testing-library/react";
import RootReducer from "../reducers/RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"
import {shallow} from "enzyme";
import {Background} from "../components/Background";
import {GetAllResources} from "../actions/StarWars/StarwarsActions";
import {STARWARS_LOADING, STARWARS_RESOURCES} from "../actions/StarWars/StarwarsActionsType";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("render App component", () => {
  it("renders App component without crashing ", () => {
    const store = mockStore(middlewares)
    const wrapper = shallow(<Provider store={store}><App /></Provider>)
    expect(wrapper.length).toEqual(1)
  });

  it("check action on dispatching", () => {
    const store = mockStore(middlewares)
    store.dispatch(GetAllResources())
    const actions = store.getActions()
    expect(actions[0].type).toBe(STARWARS_LOADING)
  })

});
