export interface IShopArrayItem {
  id: number;
  name: string;
  price: number;
  src: string;
}

export interface IInitialState {
  productsList: IShopArrayItem[];
  favoriteList: number[];
}

export interface IAction {
  type: string;
  payload: any;
}
