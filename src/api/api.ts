import axios from 'axios';
import { IShopArrayItem } from '../types';

const instance = axios.create({
  baseURL: 'https://testbackend.nc-one.com/',
});

export const getProducts = async () => {
  const request: IShopArrayItem[] = await instance
    .get('image')
    .then((response) => {
      return response.data;
    });
  return request;
};

export const getProductById = async (id: number) => {
  const request: IShopArrayItem = await instance
    .get('image', { params: { id: id } })
    .then((response) => {
      return response.data;
    });
  return request;
};
