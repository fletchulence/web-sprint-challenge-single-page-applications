// this is where all the info will go for the inputs
// TODO: need name(textInput), size(dropdown[s,m,l]), toppings(checkboxes[4+]), special(textInput)
//! need onSubmit and onChange

import React from "react";

const PizzaForm = (props) =>{

   const onSubmit = (evt) =>{
      evt.preventDefault()

   }

   return(
      <form id='pizza-form' onSubmit={onSubmit}>
         <label>
            <input id='name-input'
               type='text'
            />
         </label>
         <label> select a size
            <select id='size-dropdown'
               name='size'
            >
             <option value=''> Select a Pizza Size </option>  
             <option value='small'> Small </option>  
             <option value='medium'> Medium </option>  
             <option value='Large'> Large </option>  
            </select>
         </label>

         <div className='toppings'>
            <label> what hhappens
               <input
                  type='checkbox'
               />
            </label> pepperoni
            <label>
               <p> what happens now ?</p>
               <input
                  type='checkbox'
               />
            </label> olives
            <label>
               <input
                  type='checkbox'
               />
            </label> chicken
            <label>
               <input
                  type='checkbox'
               />
            </label> pinneaple

         </div>

         <label> Special Instructions
            <input id='special-text'
               type='text'
            />
         </label>
         <label>
            <input id='order-button' type='submit'/>
         </label>
      </form>
   )
}

export default PizzaForm;