import { dispatch } from '..';
import { getProducts } from '../../api';
import { IAction, IShopArrayItem } from '../../types';
import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  SET_PRODUCTS_LIST,
} from '../reducer';

export const addToFavorite = (id: number): IAction => ({
  type: ADD_TO_FAVORITE,
  payload: id,
});

export const removeFromFavorite = (id: number): IAction => ({
  type: REMOVE_FROM_FAVORITE,
  payload: id,
});

const setProductList = (data: IShopArrayItem[]): IAction => ({
  type: SET_PRODUCTS_LIST,
  payload: data,
});

export const fetchProducts = async () => {
  const request: IShopArrayItem[] = await getProducts();
  dispatch(setProductList(request));
};
