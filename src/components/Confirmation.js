// this is going to take the data of the useState(formVals) from App.js and spit out all the info

import React from 'react';

import Cart from './Cart';

export default function Confirmation(props){
   const { pizza } = props;

   // console.log(pizza)

   {pizza &&
      pizza.map(pizza =>{
         console.log(pizza)})
      
    }

   return(
      <div>hello my name is {pizza.name} </div>
   )
}