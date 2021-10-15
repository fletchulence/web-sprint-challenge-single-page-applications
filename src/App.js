import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import styled from "styled-components"; //? may not use this here, but good to note

//component imports
import Header from "./components/Header";

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

  // useEffect
  // axios.post()

  return (
    <>
      <h1>Lambda Eats</h1>
      <Header/>
    </>
  );
};
export default App;
