const addToppingSetup = () => {
  const form = document.getElementById('toppings-form');
  form.addEventListener('submit', (event) => {
    let selectedToppings = document.getElementsByClassName('selected-topping');
    if (selectedToppings.length >= 3) {
      event.preventDefault();
      document.getElementById('topping-error').innerHTML = 'Cannot select more than 3 toppings';
    }
  });
}

export default addToppingSetup;