const removeTopping = async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  req.session.ingredients.toppings.splice(req.params.index, 1)

  res.writeHead(303,
    { Location: '/' })
  return res.end();
}

export default removeTopping;