import { IAction, IInitialState } from '../../types';

export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const SET_PRODUCTS_LIST = 'SET_PRODUCTS_LIST';

export const initialState: IInitialState = {
  productsList: [],
  favoriteList: [],
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        productsList: action.payload,
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteList: [
          ...state.favoriteList.filter((elem) => elem !== action.payload),
        ],
      };
    default:
      return state;
  }
};
