import React from "react";
// @ts-ignore
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react'
import {CardExt} from "../components/Dashboard/Card/Card";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Card and children components", () => {
  test('should set question mark(?) if firstPlayer and secondPlayer undefined ', () => {
    const store = mockStore(middlewares)
    render(
      <Provider store={store}>
        <CardExt data-testid="card-ext" points={0} position={'left'} player={undefined} isActive={false} />
      </Provider>
    )
    screen.getByText('?')
  });

  test('should set players after if firstplayer and second has types', () => {

  })
})
