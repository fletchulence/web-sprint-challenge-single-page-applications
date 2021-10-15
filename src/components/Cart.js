import React from "react";

export default function Cart (props) {
   
   return(
      <div>
         <p>{props.pizza.name}</p>
         <p>{props.pizza.size}</p>
         <p>{props.pizza.pepperoni}</p>
         <p>{props.pizza.olives}</p>
         <p>{props.pizza.chicken}</p>
         <p>{props.pizza.pineapple}</p>
         <p>{props.pizza.special}</p>
      </div>
   )
}