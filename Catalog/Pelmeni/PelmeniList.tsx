import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Pelmen from './Pelmen';

function PelmeniList(): JSX.Element {
  const pelmeshki = useSelector((store: RootState) => store.pelmeni.pelmeni);
  console.log(pelmeshki);
  return (
    <>
      <div>PelmeniList</div>;
      {pelmeshki.map((pelmen) => (
        <div className="ad">
          <Pelmen key={pelmen.id} pelmen={pelmen} />
        </div>
      ))}
    </>
  );
}

export default PelmeniList;
