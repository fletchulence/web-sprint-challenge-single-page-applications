import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import styled from "styled-components"; //? may not use this here, but good to note
import axios from "axios";
import * as yup from 'yup';
import schema from './validation/formSchema'

//component imports
import Header from "./components/Header";
import Home from "./components/Home";
import PizzaForm from './components/PizzaForm';
// import schema from

const initialFormVals = {
  name: '',
  size: '',
  //toppings
  pepperoni: false,
  olives: false,
  chicken: false,
  pineapple: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: ''
  // submitBtn: ''
  
}

const initialDisabled = true;


const App = () => {
  const [ pizzaOrder, setPizzaOrder ] = useState([]);
  const [ formVals, setFormVals ] = useState(initialFormVals) 
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  //ERRORS
  const validate = (name, value) =>{
    yup.reach(schema, name).validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: ''})
      })
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]})
      )
  }
  

  const updateForm = (inputName, inputVal) =>{
    //errors onChange
    validate(inputName, inputVal)
    //formVals onChange
    setFormVals({ ...formVals, [inputName]: inputVal})
  }

  const submitForm = () =>{
    const newOrder={
      //text
      name: formVals.name.trim(),
      //dropdown
      size: formVals.size,
      //toppings
      pepperoni: formVals.pepperoni,
      olives: formVals.olives,
      chicken: formVals.chicken,
      pineapple: formVals.pineapple,
      //text for special instructinos
      special: formVals.special.trim(),
    }
    postNewOrder(newOrder)
  }
  
  const postNewOrder = (newOrder) => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
      .then(res=>{
         console.log(res.data)
        setPizzaOrder(res.data)
      })
      .catch(err=>{
        console.error(err)
      })
      .finally(() => setFormVals(initialFormVals))
    }
    
    


    //TODO: set disabled
    useEffect(() =>{
    //!for the disabled form submit
      schema.isValid(formVals)
      .then(valid =>{
        setDisabled(!valid)
      })
    }, [formVals])

    return (
    <>
      <h1>Lambda Eats</h1>
      <Header/>
      <Route exact path='/'>
        <Home pizza={pizzaOrder}/>
      </Route>
      <Route path='/pizza'>
        <PizzaForm
          formVals={formVals}
          submitForm={submitForm}
          updateForm={updateForm}
          formErrors={formErrors}
        />
      </Route>
    </>
  );
};
export default App;
