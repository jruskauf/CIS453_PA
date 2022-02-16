import React from 'react'
import data from './components/back/Data/Data'
import Header from './components/front/Header/Header'
import Routing from './components/front/Routing/Routing'
import { BrowserRouter } from "react-router-dom"

const App = () => {
  const { productItems } = data

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routing productItems={productItems}/>
      </BrowserRouter>
    </div>
  )
}

export default App