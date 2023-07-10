import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import Header from '../Header';
import { Product } from './types/ProductType';
import CatagoryList from '../../utils/CatagoryList';
//
function CatalogHome(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="menu">
        {CatagoryList().map((dish) => (
          <>
            <div className="menu__item" key={dish.id}>
              <img
                src={dish.image}
                alt="dish"
                onClick={() => navigate(`./catalog${dish.path}`)}
              />
              <p>{dish.product_category}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default CatalogHome;

/* <div onClick={onClModal}>Pizza</div>
        <div onClick={() => navigate(`/pizza`)}>Pizza</div>
        <div>Японская кухня</div>
        <div>Шаверма</div>
        <div>Салаты</div>
        <div>Первое блюдо</div>
        <div>Горячие блюда</div>
        <div>Паста и ризотто</div>
        <div>Вареники</div>
        <div>Спиртное</div>
        <div>Пиво "Потапыч"</div>
        <div>Закуски к пиву</div>
        <div>Напитки</div>
        */
