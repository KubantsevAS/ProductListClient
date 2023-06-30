import './App.scss';
import { getProductById, getProducts } from './api';

function App() {
  const onClickHandler = async () => {
    const answ = await getProducts();
    console.log(answ);
  };
  const onClickHandler2 = async () => {
    const answ = await getProductById(7);
    console.log(answ);
  };

  return (
    <>
      <button onClick={onClickHandler}>Get All Products</button>
      <button onClick={onClickHandler2}>Get Number 7 product</button>
    </>
  );
}

export default App;
