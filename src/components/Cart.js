import React from "react";

export default function Cart (props) {
   const { pizza } = props

   return(
      <div className='myCart'>
         <p>{pizza.name}</p>
         <p>{pizza.size}</p>

         {
            !!pizza.toppings && !!pizza.toppings.length &&
            <div>
               Toppings:
               <ul>
                  {pizza.toppings.map((topgs, idx) => (
                     <li key={idx}> {topgs} </li>
                  ))}
               </ul>
            </div>
         }

         <p>{pizza.special}</p>
      </div>
   )
}