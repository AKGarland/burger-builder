import addToppingSetup from "./addToppingSetup.js";
import saveImageSetup from "./saveImageSetup.js";
import doubleProteinSetup from "./doubleProteinSetup.js";

const addHandlersOnLoad = () => {
  window.addEventListener('load', () => {
    addToppingSetup();
    saveImageSetup();
    doubleProteinSetup();
  })
}

export default addHandlersOnLoad();