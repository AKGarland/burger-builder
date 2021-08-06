import allProtein from '../../data/proteins';

const selectProtein = async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  req.session.ingredients.protein = allProtein.filter(protein => protein.name === req.body['protein'])[0];
  res.writeHead(303,
    { Location: '/' })

  return res.end();
}

export default selectProtein;