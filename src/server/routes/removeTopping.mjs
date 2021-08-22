const removeTopping = async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const ingredientIndex = req.session.ingredients[req.params.type + 's'].find(ingredient => ingredient.id === req.params.id);
  req.session.ingredients[req.params.type + 's'].splice(ingredientIndex, 1);

  res.writeHead(303,
    { Location: '/' });

  return res.end();
}

export default removeTopping;