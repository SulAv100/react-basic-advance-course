import React from 'react'
import './Linker.css'
import {Link, Routes, Route} from 'react-router-dom'
import ApiExample from '../ApiExample/ApiExample'
import Useeffect from '../ComponentLifecycle/Useeffect'
import Counter from '../State/Counter'
import Cart from '../Cart/Cart'

function Linker() {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <Link to='/'><li>Api Example</li></Link>
                    <Link to='/component'><li>ComponentLifecycle</li></Link>
                    <Link to='/counter'><li>Counter</li></Link>
                    <Link to='/cart'>Cart</Link>
                </ul>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<ApiExample/>} />
            <Route path='/component' element={<Useeffect/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </>
)
}

export default Linker