import React from "react";

import { decrement, increment } from "../Slice/Slicer";
import { useSelector, useDispatch } from "react-redux";

function Counter() {

  const selector = useSelector(state=>state.counter.count);
  const dispatch = useDispatch();


  return (
    <>
      <button onClick={()=> dispatch(decrement())} >Decrement</button>
      <span>Count:{selector}</span>
      <button  onClick={()=> dispatch(increment() )}>Increment</button>
    </>
  );
}

export default Counter;
