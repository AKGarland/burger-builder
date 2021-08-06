import React from 'react';
import { string, bool } from 'prop-types';

export default function IngredientCard(props) {
  const submitId = `submit-${props.name.toLowerCase()}`;
  let buttonClassName = "btn btn-primary select-ingredient-btn select-" + props.type;
  if (props.selected === true) {
    buttonClassName += " selected";
  } else {
    buttonClassName = buttonClassName.replace(" selected", "");
  }
  let buttonLabel;
  switch (props.type) {
    case "base":
      buttonLabel = "Select";
      break;
    case "topping":
      buttonLabel = "Add";
      break;
    default:
      buttonLabel = "Add";
  }
  return (
    <div className="card ingredient-card">
      <img src={props.imgSrc} className="card-img-top ingredient-card-img" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <button className={buttonClassName} id={submitId}
          style={{ margin: '0 35%' }} name={props.type} value={props.name} type="submit">{buttonLabel}</button>
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
