import React, { Suspense } from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import type { Itechnologies } from './types/technologies'
import Technologies from './components/technologies/Technologies'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/footer'
const technologiesFetch = async (): Promise<Itechnologies[]> => {
   const res = await fetch('/data.json')
   const data = await res.json()
   return data
}

const App = () => {
  const technologyPromise = technologiesFetch()
  return (
    <>
      <Nav />
     <Banner />
     <Suspense fallback={<div className='text-center text-lg font-semibold py-12'>Loading...</div>}>
     <Technologies technologyPromise={technologyPromise} />
     </Suspense>
      <ToastContainer />
     <Footer />
    
    </>
  )
}
export default App
