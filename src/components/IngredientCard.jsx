import React from 'react';
import { string, bool } from 'prop-types';

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
      buttonLabel = "Add";
      break;
    case "extra":
      buttonLabel = `Add  £${props.price.toFixed(2)}`
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
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <button className={buttonClassName + " ingredient-btn"} id={submitId}
          name={props.type} value={props.name} type="submit">{buttonLabel}</button>
      </div>
    </div>
  );
}

IngredientCard.propTypes = {
  imgSrc: string,
  name: string,
  description: string,
  type: string,
  selected: bool
};
