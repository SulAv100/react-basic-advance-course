import React from 'react'
import './Cart.css'

function Cart() {
  return (
    <>
        <div className="cart-elements">
            <div className="single-element">
                <span>Asus</span>
                <div className="buttons">
                    <button>Decrement</button>
                    <span>0</span>
                    <button>Increment</button>
                </div>
            </div>
            <div className="single-element">
                <span>Lenovo</span>
                <div className="buttons">
                    <button>Decrement</button>
                    <span>0</span>
                    <button>Increment</button>
                </div>
            </div>
            <div className="single-element">
                <span>HP</span>
                <div className="buttons">
                    <button>Decrement</button>
                    <span>0</span>
                    <button>Increment</button>
                </div>
            </div>
            <div className="single-element">
                <span>Dell</span>
                <div className="buttons">
                    <button>Decrement</button>
                    <span>0</span>
                    <button>Increment</button>
                </div>
            </div>
            <div className="single-element">
                <span>Acer</span>
                <div className="buttons">
                    <button>Decrement</button>
                    <span>0</span>
                    <button>Increment</button>
                </div>
            </div>
        </div>
    </>
)
}

export default Cart