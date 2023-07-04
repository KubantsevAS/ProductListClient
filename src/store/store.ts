import { createStore, createGlobalState } from 'react-hooks-global-state';
import { reducer } from './reducer';

interface IShopArrayItem {
  id: number;
  name: string;
  price: number;
  src: string;
}

interface IInitialState {
  productsList: IShopArrayItem[];
  favoriteList: number[];
}

export const initialState: IInitialState = {
  productsList: [
    {
      id: 1,
      name: 'string',
      price: 10,
      src: 'string',
    },
  ],
  favoriteList: [],
};

export const { useGlobalState, setGlobalState } =
  createGlobalState(initialState);

export const { dispatch, useStoreState } = createStore(reducer, initialState);
