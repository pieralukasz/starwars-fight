import React from "react";
// @ts-ignore
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { CardExt } from "../components/Dashboard/Card/Card";
import { StarwarsPeopleMass } from "../actions/StarWars/StarwarsActionsType";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "../reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { RESET_POINTS, SET_POINTS } from "../actions/Points/PointsActionType";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const firstPlayer: StarwarsPeopleMass = {
  name: "Jan",
  mass: 30,
  crew: undefined,
};

describe("Card and children components", () => {
  test("should set question mark(?) if firstPlayer and secondPlayer undefined ", () => {
    const store = mockStore(middlewares);
    render(
      <Provider store={store}>
        <CardExt
          data-testid="card-ext"
          points={0}
          position={"left"}
          player={undefined}
          isActive={false}
        />
      </Provider>
    );
    screen.getByText("?");
  });

  test("should set players after if firstplayer and second has types", () => {
    const store = mockStore(middlewares);

    render(
      <Provider store={store}>
        <CardExt
          data-testid="card-ext"
          points={0}
          position={"left"}
          player={firstPlayer}
          isActive={false}
        />
      </Provider>
    );

    screen.getByText("Jan");
  });

  test("Check if points update and reset", () => {
    const Store = createStore(
      RootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    );

    Store.dispatch({
      type: SET_POINTS,
      payload: {
        firstPlayerWin: true,
        secondPlayerWin: false,
      },
    });

    expect(Store.getState().points.firstSelect).toBe(1);
    expect(Store.getState().points.secondSelect).toBe(0);

    Store.dispatch({
      type: RESET_POINTS,
    });

    expect(Store.getState().points.firstSelect).toBe(0);

    Store.dispatch({
      type: SET_POINTS,
      payload: {
        firstPlayerWin: false,
        secondPlayerWin: true,
      },
    });

    expect(Store.getState().points.firstSelect).toBe(0);
    expect(Store.getState().points.secondSelect).toBe(1);
  });

  test("Check If points update into component", () => {
    const Store = createStore(
      RootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    );

    Store.dispatch({
      type: SET_POINTS,
      payload: {
        firstPlayerWin: true,
        secondPlayerWin: false,
      },
    });

    render(
      <Provider store={Store}>
        <CardExt
          isActive={false}
          position={"left"}
          player={firstPlayer}
          points={Store.getState().points.firstSelect}
        />
      </Provider>
    );

    screen.getByText("1")
  });

  test("Check if points reset into components", () => {

    const Store = createStore(
      RootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    );

    render(
      <Provider store={Store}>
        <CardExt
          isActive={false}
          position={"left"}
          player={firstPlayer}
          points={Store.getState().points.firstSelect}
        />
      </Provider>
    );


    Store.dispatch({
      type: SET_POINTS,
      payload: {
        firstPlayerWin: true,
        secondPlayerWin: false,
      },
    });

    Store.dispatch({
      type: RESET_POINTS
    });

    screen.getByText("0")
  })
});
