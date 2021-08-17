import React from 'react';
import { array, object } from 'prop-types';
import IngredientCard from './IngredientCard.jsx';

export default function ProteinDisplay({ proteins, selection }) {

  return (
    <>
      <p className="font-monospace fs-3">Protein</p>
      <div id="base-error" className="error"></div>
      <form className="card-group base-display" id="protein-form"
        action="/select-protein/" method="POST">
        {proteins.map((protein, i) => {
          const selected = selection !== undefined && protein.name === selection.name;
          protein.double = selection !== undefined && selection.double;
          return (
            <IngredientCard {...protein} selected={selected} key={i} />
          )
        })}
      </form>
    </>
  );
}

ProteinDisplay.propTypes = {
  proteins: array,
  selection: object
}