import React from 'react';
import { string, bool, number } from 'prop-types';

export default function IngredientCard(props) {
  const submitId = `submit-${props.name.toLowerCase()}`;
  let buttonClassName = "btn btn-primary select-ingredient-btn select-" + props.type;

  let buttonLabel;
  switch (props.type) {
    case "base":
    case "protein":
      buttonLabel = "Select";
      break;
    case "topping":
    case "extra":
      buttonLabel = "Add";
      break;
    default:
      buttonLabel = "Add";
  }

  if (props.selected === true) {
    buttonClassName += " selected";
    buttonLabel = "Selected";
  } else {
    buttonClassName = buttonClassName.replace(" selected", "");
  }

  return (
    <div className="card ingredient-card">
      <img src={props.imgSrc} className="card-img-top ingredient-card-img" />
      <div className="card-body">
        <h5 className="card-title">
          <span className="ingredient-name">{props.name}</span>{props.price !== undefined ? (<span className="ingredient-price">{"£" + props.price.toFixed(2)}</span>) : undefined}
        </h5>
        <p className="card-text">{props.description}</p>
        <button className={buttonClassName + " ingredient-btn"} id={submitId}
          name={props.type} value={props.name} type="submit">{buttonLabel}</button>
        {props.type === 'protein' && props.selected === true ? (<div className="checkbox-display">
          <p className="checkbox-prompt">Double up?</p>
          <span className="double-up-price">£{(props.price / 2).toFixed(2)}</span>
          <input type="checkbox" className={"form-check-input double-up-checkbox double-up-" + props.type} value={props.name} id={"double-" + props.type + "-check"} ></input>
        </div>) : (<></>)}
      </div>
    </div>
  );
}

IngredientCard.propTypes = {
  imgSrc: string,
  name: string,
  description: string,
  type: string,
  selected: bool,
  price: number
};
