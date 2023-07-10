import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from './types/ProductType';
import { plusDish, scorePlus } from './productSlice';
import { useAppDispatch } from '../../store/store';

function DishCard({ p }: { p: Product }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [scoreTime, setScoreTime] = useState(0);

  return (
    <>
      <div className="element">
        <img src={p.image} alt="product" onClick={() => navigate(`${p.id}`)} />
        <div className="element__title">
          <span className="product_name">{p.product_name}</span>
          <span className="weight">{p.weight} гр.</span>
          <div className="price">{p.price} ₽</div>
          <div>
            <button
              className="but"
              type="button"
              onClick={() => dispatch(plusDish(p))}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <p>{p.composition}</p>
        </div>
      </div>
    </>
  );
}

export default DishCard;
