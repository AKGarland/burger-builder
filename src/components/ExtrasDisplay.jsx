import React from 'react';
import { array } from 'prop-types';
import IngredientCard from './IngredientCard.jsx';

export default function ExtrasDisplay(props) {
  return (<>
    <p className="font-monospace fs-1">Extras</p>
    <form className="card-group base-display" id="extras-form"
      action="/add-extra/" method="POST">
      {props.extras.map((extra, i) => (<IngredientCard {...extra} key={i} />))}
    </form>
  </>);
}

ExtrasDisplay.propTypes = {
  extras: array
}