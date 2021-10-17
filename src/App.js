import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import styled from "styled-components"; //? may not use this here, but good to note
import axios from "axios";

//component imports
import Header from "./components/Header";
import Home from "./components/Home";
import PizzaForm from './components/PizzaForm';
import Cart from './components/Cart';
import Confirmation from './components/Confirmation';

// import schema
import * as yup from 'yup';
import schema from './validation/formSchema'

const initialFormVals = {
  name: 'david',
  size: 'medium',
  //toppings
  pepperoni: false,
  olives: true,
  chicken: false,
  pineapple: false,
  special: 'no cheese',
}

const initialFormErrors = {
  name: '',
  size: '',
  // submitBtn: ''
  
}

const initialDisabled = true;


const App = () => {
  const [ pizzaOrder, setPizzaOrder ] = useState([]);
  const [ formVals, setFormVals ] = useState(initialFormVals); 
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled);

  
  const updateForm = (inputName, inputVal) =>{
    //errors onChange
    validate(inputName, inputVal)
    //formVals onChange
    setFormVals({ ...formVals, [inputName]: inputVal})
  }
  
  const submitForm = () =>{
    const newOrder = {
      //text
      name: formVals.name.trim(),
      //dropdown
      size: formVals.size,
      //toppings
      toppings: [
        'pepperoni', 
        'olives', 
        'chicken', 
        'pineapple'].filter(tops => !!formVals[tops]),
      //text for special instructinos
      special: formVals.special.trim(),
    }
      setPizzaOrder(pizzaOrder.concat(newOrder))    
      postNewOrder(newOrder)
  }

  // useEffect(() =>{
  //   getPizza()
  // }, [])  //! MAY HAVE TO DO THIS

  const postNewOrder = (newOrder) => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
    .then(res=>{
      console.log(res.data)
      setPizzaOrder([...pizzaOrder, res.data])
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      // console.log('you are screwed')
       setFormVals(initialFormVals)
    })
  }
  
  
  //ERRORS
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: ''})
      })
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]})
      )
  }

    //TODO: set disabled
    //!for the disabled form submit
    useEffect(() => {
      schema.isValid(formVals)
      .then(valid =>{
        setDisabled(!valid)
      })
      .finally(() => ('cleaning'))
    }, [formVals])

    return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Header/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/confirmation'>
        <Confirmation pizza = { pizzaOrder } />
      </Route>
      <Route path='/cart'>
        {pizzaOrder &&
          pizzaOrder.map(pizza =>{
            return <Cart key={pizza.id} pizza={pizza}/>
          })
        }
      </Route>
      <Route path='/pizza'>
        <PizzaForm
          formVals={formVals}
          submitForm={submitForm}
          updateForm={updateForm}
          formErrors={formErrors}
          disabled={disabled}
          />
          {!!pizzaOrder &&
            pizzaOrder.map(pizza =>{
              return <Cart key={pizza.id} pizza={pizza}/>
            })
          }
          
          
          {/* map though everything but the names ??*/}
      </Route>
    </div>
  );
};
export default App;
