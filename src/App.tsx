import './App.scss';
import { useEffect } from 'react';
import { getProductById, getProducts } from './api';
import {
  setGlobalState,
  useGlobalState,
  useStoreState,
  dispatch,
} from './store/store';
import { addToFavorite, removeFromFavorite } from './store/reducer';

function App() {
  const [value, updateValue] = useGlobalState('productsList');

  const withReducer = useStoreState('productsList');
  const favors = useStoreState('favoriteList');

  const thunkMe = async () => {
    const answ = await getProducts();
    setGlobalState('productsList', answ);
  };

  useEffect(() => {
    thunkMe();
  }, []);

  const onClickHandler = async () => {
    const answ = await getProducts();
    console.log(withReducer);
    console.log(favors);
  };
  const onClickHandler2 = async () => {
    const answ = await getProductById(7);
    // console.log(answ);
  };

  return (
    <>
      <button onClick={onClickHandler}>Get All Products</button>
      <button onClick={onClickHandler2}>Get Number 7 Product</button>
      {value.length > 1 && (
        <div>
          {value.map((elem) => (
            <div key={elem.id}>
              <span>{elem.id}</span>
              {!favors.includes(elem.id) ? (
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
                    console.log(withReducer, value);
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
