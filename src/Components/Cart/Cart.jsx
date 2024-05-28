import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../Slice/Slicer";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-elements">
        {items?.map((item) => {
          return (
            <>
              <div className="single-element" key={item.id}>
                <span>{item.name}</span>
                <div className="buttons">
                  <button onClick={()=> dispatch(decrease(item.id))} >Decrement</button>
                  <span>{item.quantity}</span>
                  <button onClick={()=> dispatch(increase(item.id))} >Increment</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
