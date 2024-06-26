import React from 'react'
import './Linker.css'
import {Link, Routes, Route} from 'react-router-dom'
import ApiExample from '../ApiExample/ApiExample'
import Useeffect from '../ComponentLifecycle/Useeffect'
import Counter from '../State/Counter'
import Cart from '../Cart/Cart'
import Form from '../FormHandling/Form'
// import Comment from '../CommentReply/Comment'
import ApplyModal from '../Model/ApplyModal'
const LazyComment = React.lazy(()=> import('../CommentReply/Comment'))
import DataClick from '../DataonClick/DataClick'
import Stepper from '../Stepper/Stepper'

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
                    <Link to='/login'>Login</Link>
                    <Link to='/comment'>Comment</Link>
                    <Link to='/modal' >Modal</Link>
                    <Link to='/fetch'>FetchData</Link>
                    <Link to='/stepper'>Stepper</Link>
                </ul>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<ApiExample/>} />
            <Route path='/component' element={<Useeffect/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Form/>}/>
            <Route path='/comment' element={<React.Suspense fallback='Loading'><LazyComment/></React.Suspense>}/>
            <Route path='/modal'  element={<ApplyModal/>} />
            <Route path='/fetch' element={<DataClick/>}/>
            <Route path='/stepper' element={<Stepper/>}    />
        </Routes>
    </>
)
}

export default Linker