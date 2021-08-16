import addToppingSetup from "./addToppingSetup.js";
import saveImageSetup from "./saveImageSetup.js";

const addHandlersOnLoad = () => {
  window.addEventListener('load', () => {
    addToppingSetup();
    saveImageSetup();
  })
}

export default addHandlersOnLoad();