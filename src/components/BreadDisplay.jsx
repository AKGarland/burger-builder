import React from 'react';
import { array, object } from 'prop-types';
import IngredientCard from './IngredientCard.jsx';

export default function BreadDisplay(props) {
  return (
    <>
      <p className="font-monospace fs-3">Bread base</p>
      <div id="base-error" style={{ color: 'red' }}></div>
      <form className="card-group base-display" id="base-form"
        action={"/select-base/"} method="POST">
        {props.bases.map((base, i) => {
          const selected = props.selection !== undefined && base.name === props.selection.name;
          return (
            <IngredientCard {...base} selected={selected} key={i} />)
        })}
      </form>
    </>
  );
}

BreadDisplay.propTypes = {
  bases: array,
  selection: object
}