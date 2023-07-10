import React from 'react';

import { useNavigate } from 'react-router-dom';

import CatagoryList from '../../utils/CatagoryList';
import Header from '../Header';
//
function CatalogDish(): JSX.Element {
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
                onClick={() => navigate(`.${dish.path}`)}
              />
              <p>{dish.product_category}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default CatalogDish;

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
        <div onClick={onClModal}>Чизбургеры</div>
        {modal && (
          <div id="modal" onClick={onClModal}>
            POPados
            <img
              src="https://baking-academy.ru/local/phpThumb/phpThumb.php?src=/upload/iblock/591/591d601f27b30d737aecafb72d046db9.jpg&maxb=300000&w=720&h=518&aoe=1&zc=1&"
              alt=""
            />
          </div>
        )} */
