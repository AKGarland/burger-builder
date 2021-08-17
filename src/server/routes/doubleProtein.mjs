const doubleProtein = async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.session.ingredients.protein.name === req.body.protein) {
    req.session.ingredients.protein.double = req.body.double;
  }

  res.writeHead(303,
    { Location: '/' });

  return res.end();
}

export default doubleProtein;