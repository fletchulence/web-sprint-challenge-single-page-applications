import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import styled from "styled-components"; //? may not use this here, but good to note
import axios from "axios";

//component imports
import Header from "./components/Header";
import Home from "./components/Home";
import PizzaForm from './components/PizzaForm';

const initialFormVals = {
  name:'',
  size: '',
  //toppings
  pepperoni: false,
  olives: false,
  chicken: false,
  pineapple: false,
  special: '',

}

const App = () => {
  const [ pizzaOrder, setPizzaOrder ] = useState([]);
  const [ formVals, setFormVals ] = useState(initialFormVals) //initial form vals which we dont know yet

  
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
        // setPizzaOrder(res.data)
      })
      .catch(err=>{
        console.error(err)
      })
      .finally(() => setFormVals(initialFormVals))
    }
    
    
    // useEffect(() =>{
    //! for the disabled form submit
    // }, [])

    return (
    <>
      <h1>Lambda Eats</h1>
      <Header/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/pizza'>
        <PizzaForm
          formVals={formVals}
          submitForm={submitForm}
          updateForm={updateForm}

        />
      </Route>
    </>
  );
};
export default App;
