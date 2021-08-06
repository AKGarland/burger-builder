import addToppingSetup from "./addToppingSetup.js";

const addHandlersOnLoad = () => {
  window.addEventListener('load', () => {
    addToppingSetup();
  })
}

export default addHandlersOnLoad();