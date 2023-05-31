import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectNumber, incrementByAmount } from "../features/number/numberSlice";

function Number() {

  const [value,setValue] = useState(4);
  const counter = useSelector(selectNumber);
  const dispatch = useDispatch();

  return (
    <div>

      <h2>Counter is {counter}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <input type="number" value={value} onChange={e=>setValue(e.target.value)}></input>
      <button onClick={()=>dispatch(incrementByAmount(+value))}>Increment By Amount</button>

    </div>
  );

}
export default Number;

