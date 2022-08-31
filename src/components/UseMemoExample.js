import React from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import { useState } from 'react'

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  // eslint-disable-next-line
  const [inc, setInc] = useState(0);

  const sqrt = useMemo(() => getSqrt(number), [number]);
  //also requires a dependency array like useEffect
  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  }, [number]);

  //The component re-renders even if we only
  //change the inc state
  //To Stop it from changing any further we
  //we use UseMemo hook
  const handleClick = () => {
    setInc((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };

  return (
    <div className="container mt-5">
      <input
        className="form-control mb-2"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>
        The Sqrt of {number} is {sqrt}
      </h2>
      <button className="btn btn-primary" onClick={handleClick}>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt( num ){
   for(let i=0;i<1000;i++){
    console.log(i)
   }

   console.log("Expensive Function Called")
   return Math.sqrt(num)
}

export default UseMemoExample
