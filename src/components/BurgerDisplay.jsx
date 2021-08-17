import React from 'react';
import { object } from 'prop-types';

export default function BurgerDisplay(props) {
  let base = props.ingredients.base;
  let protein = props.ingredients.protein;

  // these post requests should technically be deletes, maybe possible if these were anchor links instead?
  const listIngredient = (ingredient, i) => (<li className={"selected-" + ingredient.type} key={i}>
    <div className="selection-list-item">
      <span className="selected-name">{ingredient.name}</span>
      {ingredient.price !== undefined ? (<span className="selected-price">£{ingredient.price.toFixed(2)}</span>) : (<></>)}

      <form method="POST" action={"/remove-item/" + ingredient.type + "/" + i} id={"/remove-" + ingredient.type + "-form"}>
        <button className={"remove-item-btn"} id={"submit-" + ingredient.name.toLowerCase()}>-</button>
      </form>
    </div>
  </li >)

  const displayExtrasToppings = (list) => {
    return list.map((ingredient, i) =>
    (<img src={ingredient.imgSrc} className={`card-img-top building-burger burger-${ingredient.type}`}
      id={`${ingredient.type}-${i}`} key={i} />))
  }

  return (
    <div className="card mb-3">
      <div className="burger-display-container" id="burger-img-container">
        {base !== undefined ?
          (< img src={base.imgSrc.split('.png')[0] + "-base.png"}
            className="card-img-top building-burger" id="burger-base" />)
          : (<></>)}
        {displayExtrasToppings(props.ingredients.extras)}
        {displayExtrasToppings(props.ingredients.toppings)}
        {protein !== undefined ?
          protein.double ?
            (<><img src={protein.imgSrc} className="card-img-top building-burger" id="protein-main" />
              <img src={protein.imgSrc} className="card-img-top building-burger" id="protein-double" /></>)
            : (<img src={protein.imgSrc} className="card-img-top building-burger" id="protein-main" />)
          : (<></>)
        }
        {base !== undefined ?
          (< img src={base.imgSrc.split('.png')[0] + "-lid.png"} className="card-img-top building-burger" id="burger-lid" />)
          : (<></>)}
      </div>
      <div className="btn btn-primary save-img-btn" id="save-img-btn">Save image</div>
      <div className="card-body">
        <p className="card-text">
          <div className="column">
            <h4>Base: {base !== undefined ? (base.name) : ("Unselected")}</h4>
            <h4 className="protein-selection-list"><span className="protein-selection-label">Protein: {protein !== undefined ? (protein.name) : ("Unselected")}</span>
              <span className="protein-selection-double">{protein !== undefined && protein.double ? ("x2") : (<></>)}</span>
              <span className="protein-price">£{protein !== undefined ? protein.double ? ((protein.price * 1.5).toFixed(2)) : (protein.price.toFixed(2)) : (<></>)}</span>
            </h4>
          </div>
          <div className="column">
            <h4>Toppings</h4>
            <ul>
              {props.ingredients.toppings !== undefined ? props.ingredients.toppings.map((ingredient, i) =>
                listIngredient(ingredient, i)
              ) : (<></>)}
            </ul>
          </div>
          <div className="column">
            <h4>Extras</h4>
            <ul>
              {props.ingredients.extras !== undefined ? props.ingredients.extras.map((ingredient, i) =>
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