import React from 'react'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Signup from '../Signup/Signup'
import { Route, Routes } from 'react-router-dom'

const Routing = ({productItems}) => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Products productItems={productItems}/>}/>
                <Route path='/Cart' element={<Cart />}/>
                <Route path='/Signup' element={<Signup />}/>
            </Routes>
        </div>
    )
}

export default Routing