import React from 'react';
import { object } from 'prop-types';

export default function BurgerDisplay(props) {
  let base = props.ingredients.base;
  let protein = props.ingredients.protein;

  // these post requests should technically be deletes, maybe possible if these were anchor links instead?
  const listIngredient = (ingredient, i) => (<li className={"selected-" + ingredient.type} key={i}>
    {ingredient.name}  <form method="post" action={"/remove-topping/" + i} id="remove-topping-form">
      <button className="remove-topping-btn" id={"submit-" + ingredient.name.toLowerCase()}>-</button></form>
  </li >)

  return (
    <div className="card mb-3">
      <div className="burger-display-container" style={{ height: 400, width: 450, background: '#aaade2' }}>
        {base !== undefined ?
          (< img src={base.imgSrc.split('.png')[0] + "-base.png"}
            className="card-img-top building-burger" id="burger-base" />)
          : (<></>)}
        {props.ingredients.toppings.map((ingredient, i) =>
          (<img src={ingredient.imgSrc} className="card-img-top building-burger" id={`topping-${i}`} key={i} />))
        }
        {protein !== undefined ? (<img src={protein.imgSrc} className="card-img-top building-burger" id="protein-main" />)
          : (<></>)
        }
        {base !== undefined ?
          (< img src={base.imgSrc.split('.png')[0] + "-lid.png"} className="card-img-top building-burger" id="burger-lid" />)
          : (<></>)}
      </div>
      <div className="card-body">
        <p className="card-text">
          <div className="column">
            <h4>Base: {base !== undefined ? (base.name) : ("Unselected")}</h4>
            <ul>

            </ul>
          </div>
          <div className="column">
            <h4>Toppings</h4>
            <ul>
              {props.ingredients.toppings !== undefined ? props.ingredients.toppings.map((ingredient, i) =>
                listIngredient(ingredient, i)
              ) : (<></>)}
            </ul>
          </div>
        </p>
      </div>
    </div >
  );
}

BurgerDisplay.propTypes = {
  ingredients: object
}