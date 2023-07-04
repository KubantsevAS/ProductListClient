import { initialState } from './store';

const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
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

interface IAction {
  type: string;
  payload: number;
}

export const addToFavorite = (id: number): IAction => ({
  type: ADD_TO_FAVORITE,
  payload: id,
});

export const removeFromFavorite = (id: number): IAction => ({
  type: REMOVE_FROM_FAVORITE,
  payload: id,
});
