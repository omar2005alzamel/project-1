import Header from './components/header'
import About from './components/about'
import Cardd from './components/card'
import Lastcard from './components/lastcard'
import data from './data'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/footer'
function App() {
  const [item,setitem]=useState(data);
  //filter search
  const Filtersearch=(word)=>{
    if(word !==''){
      const newarry=data.filter((item)=>item.name === word)
      setitem(newarry)
    }
    else if(word===''){
      setitem(data)
    }
  }
  return (
    <>
      <Header Filtersearch={Filtersearch}/>
      <About/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cardd item={item}/>}/>
          <Route path='/lastcard/:id' element={<Lastcard item={item}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
