import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Header from '../Header';

import MenuProd from '../MenuProd';
import Basket from '../Basket';

import { useParams } from 'react-router-dom';
import DishCard from './DishCard';

function CatalogListSections(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  console.log(products);

  // ------------------------------ фильтр для отрисовки только одно КАТЕГОРИИ БЛЮД  // ------------------------------
  const params = useParams();
  const dishList = products.filter((el) => el.path === `/${params.path}`);

  return (
    <>
      <div className="list">
        <Header />
        <MenuProd />

        <div className="list__contaner">
          <div className="list__item">
            <div className="list__title">
              <p>
                СЛОГАН ДЛЯ КАЖДОЙ КАТЕГОРИИ = Вкуснейшее блюдо, которое можно
                купить за деньги на земле!
              </p>
            </div>
            {dishList.map((p) => (
              <>
                <DishCard key={p.id} p={p} />
              </>
            ))}
          </div>
        </div>
        <div
          className="basket"
          style={{ position: 'fixed', top: '100px', right: '10px' }}
        >
          <Basket />
        </div>
      </div>
    </>
  );
}

export default CatalogListSections;
