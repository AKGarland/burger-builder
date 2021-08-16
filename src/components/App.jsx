import React from 'react';
import { object } from 'prop-types';
import BurgerDisplay from './BurgerDisplay.jsx';
import ToppingsDisplay from './ToppingsDisplay.jsx';
import BreadDisplay from './BreadDisplay.jsx';
import ProteinDisplay from './ProteinDisplay.jsx';
import ExtrasDisplay from './ExtrasDisplay.jsx';
import { toppings, bases, proteins, extras } from '../data';

export default function App(props) {
  return (
    <div className="container-sm">
      <div className="row">
        <div className="column col-6">
          <BurgerDisplay ingredients={props.session.ingredients} />
        </div>
        <div className="column col-6">
          <BreadDisplay bases={bases} selection={props.session.ingredients.base} />
          <ProteinDisplay proteins={proteins} selection={props.session.ingredients.protein} />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <ToppingsDisplay toppings={toppings} />
        </div>
        <div className="column">
          <ExtrasDisplay extras={extras} />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  session: object
}