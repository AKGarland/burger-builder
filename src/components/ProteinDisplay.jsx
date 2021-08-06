import React from 'react';
import { array, object } from 'prop-types';
import IngredientCard from './IngredientCard.jsx';

export default function ProteinDisplay(props) {

  return (
    <>
      <p className="font-monospace fs-3">Protein</p>
      <div id="base-error" style={{ color: 'red' }}></div>
      <form className="card-group base-display" id="protein-form"
        action={"/select-protein/"} method="POST">
        {props.proteins.map((protein, i) => {
          const selected = props.selection !== undefined && protein.name === props.selection.name;
          return (
            <IngredientCard {...protein} selected={selected} key={i} />)
        })}
      </form>
    </>
  );
}

ProteinDisplay.propTypes = {
  proteins: array,
  selection: object
}