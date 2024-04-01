import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from '../Redux/counter/action'; 
import { decrement } from '../Redux/counter/action'; 
import { reset } from '../Redux/counter/action'; 


const Counter = () => {

    const state = useSelector((state) => {
        return state.count;
      });
      // console.log(state);
      const dispatch = useDispatch();
  return (
    <>
    <h3>Count : {state}</h3>
    <button onClick={()=>{dispatch(increment(10))}}>Incre</button>
    <button onClick={()=>{dispatch(decrement(5))}}>Decre</button>
    <button onClick={()=>{dispatch(reset())}}>Reset</button>
  </>
  )
}

export default Counter