import React, { useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { deletePelmen } from './pelmeniSlice';
import { PelmeniType } from './types/PelmeniType';

function Pelmen({ pelmen }: { pelmen: PelmeniType }): JSX.Element {
  const dispatch = useAppDispatch();
  const [zoom, setZoom] = useState(false);
  const set = (): void => {
    setZoom((prev) => !prev);
  };
  const deleteClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(deletePelmen(pelmen.id));
  };

  return (
    <>
      <div className="menu">
        <img src={pelmen.image} />
        <div>{pelmen.product_name}</div>
        {zoom && (
          <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </>
        )}
        <button type="button" onClick={set}></button>
        <button type="button" onClick={deleteClickHandler}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Pelmen;
