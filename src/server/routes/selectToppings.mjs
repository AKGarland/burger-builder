import allToppings from '../../data/toppings';

const selectToppingsRoute = async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.session.ingredients.toppings === undefined || req.session.ingredients.toppings.length < 3) {

    let toppings = [];
    if (req.session.ingredients.toppings !== undefined) {
      toppings = req.session.ingredients.toppings;
    }
    const topping = allToppings.filter(topping => topping.name === req.body['topping'])[0];
    topping !== undefined ? toppings.push(topping) : undefined;
    req.session.ingredients.toppings = toppings;

    res.writeHead(303,
      { Location: '/' })
  } else {
    res.writeHead(400);
  }
  return res.end();
}

export default selectToppingsRoute;