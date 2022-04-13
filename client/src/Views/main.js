import React, { useState } from 'react';
import CreateProduct from '../components/CreateProduct';
import DisplayAll from '../components/DisplayAll';



const Main = (props)=> {


  return(
    <div>
      <CreateProduct/>
      <DisplayAll/>
    </div>
  )

}

export default Main;