import './App.scss';
import { useEffect } from 'react';
import { useStoreState, dispatch } from './store';
import { addToFavorite, fetchProducts, removeFromFavorite } from './store';
import { IShopArrayItem } from './types';

function App() {
  const productsList: IShopArrayItem[] = useStoreState('productsList');
  const favoriteList: number[] = useStoreState('favoriteList');

  useEffect(() => {
    fetchProducts();
  }, []);

  const onClickHandler = async () => {
    console.log(productsList);
    console.log(favoriteList);
  };
  return (
    <>
      <button onClick={onClickHandler}>Get All Products</button>
      {productsList.length > 1 && (
        <div>
          {productsList.map((elem) => (
            <div key={elem.id}>
              <span>{elem.id}</span>
              {!favoriteList.includes(elem.id) ? (
                <button
                  onClick={() => {
                    dispatch(addToFavorite(elem.id));
                  }}
                >
                  Like
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(removeFromFavorite(elem.id));
                  }}
                >
                  Dislike
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
