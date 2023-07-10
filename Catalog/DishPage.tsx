import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store/store';
import Header from '../Header';
import MenuProd from '../MenuProd';
import { plusDish } from './productSlice';

function DishPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const arrDish = useSelector((store: RootState) => store.products.products);

  const dish = arrDish.find((dish) => dish.id === Number(id));

  return (
    <>
      {dish && (
        <div className="dish">
          <Header />
          <MenuProd />
          <div className="page">
            <div className="element">
              <img src={dish.image} alt="product" />
              <div className="element__title">
                <span className="product_name">{dish.product_name}</span>
                <span className="weight">{dish.weight} гр.</span>
                <div className="price">{dish.price} ₽</div>
                <button
                  className="but"
                  type="button"
                  onClick={() => dispatch(plusDish(dish.price))}
                >
                  +
                </button>
              </div>

              <div>
                <p>{dish.composition}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DishPage;
