import React, { useState, useMemo } from 'react';

export function MyHeading(): JSX.Element {
  const [count, setCount] = useState(0);
  const [cssStyle, setCssStyle] = useState(false);
  //------------------ ипользование МЕМО ф-я не персчитывается
  const heavyFunction = (number: number) => {
    // console.log('Current value count: ', number);
    // console.log('Current value color: ', cssStyle);
    for (let index = 0; index < 999; index++) {}
    return number * number;
  };
  //------------------

  const countSquare = useMemo(() => heavyFunction(count), [count]);
  return (
    <>
      <h1
        onClick={() => setCssStyle(!cssStyle)}
        style={{ color: cssStyle ? 'green' : 'red' }}
      >
        useMemo
      </h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <h2>{countSquare}</h2>
    </>
  );
}
export default MyHeading;
