// this is where all the info will go for the inputs
// TODO: need name(textInput), size(dropdown[s,m,l]), toppings(checkboxes[4+]), special(textInput)
//! need onSubmit and onChange

import React from "react";

const PizzaForm = (props) =>{
   const { formVals, updateForm, submitForm } = props;

   const onChange = (evt) =>{
      const { name, value, checked, type } = evt.target
      const valueToUse = type ==='checkbox' ? checked : value;

      updateForm( name, valueToUse)
   }

   const onSubmit = (evt) =>{
      evt.preventDefault()
      submitForm()
   }

   return(
      <form id='pizza-form' onSubmit={onSubmit}>
         <label>
            <input id='name-input'
               type='text'
               name='name'
               value={formVals.name}
               onChange={onChange}
            />
         </label>
         <label> select a size
            <select id='size-dropdown'
               // doesnt take a type
               name='size'
               value={formVals.size}
               onChange={onChange}
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
                  name='pepperoni'
                  onChange={onChange}
                  checked={formVals.name}
                  />
            </label> pepperoni
            <label>
               <p> what happens now ?</p>
               <input
                  type='checkbox'
                  name='olives'
                  onChange={onChange}
                  checked={formVals.olives}
                  />
            </label> olives
            <label>
               <input
                  type='checkbox'
                  name='chicken'
                  onChange={onChange}
                  checked={formVals.chicken}
                  />
            </label> chicken
            <label>
               <input
                  type='checkbox'
                  name='pineapple'
                  onChange={onChange}
                  checked={formVals.pineapple}
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