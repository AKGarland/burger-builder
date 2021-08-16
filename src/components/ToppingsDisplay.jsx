import React from 'react';
import { array } from 'prop-types';
import IngredientCard from './IngredientCard.jsx';

export default function Toppings(props) {

  return (
    <>
      <p className="font-monospace fs-1">Toppings</p>
      <div id="topping-error" className="error"></div>
      <form className="card-group toppings-display" id="toppings-form"
        action="/select-topping/" method="POST">
        {props.toppings.map((topping, i) => (
          <IngredientCard {...topping} key={i} />))}
      </form>
    </>
  );
}

Toppings.propTypes = {
  toppings: array
}