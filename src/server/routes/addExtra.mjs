import allExtras from '../../data/extras';

const addExtra = async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  // limit check?
  const extra = allExtras.filter(extra => extra.name === req.body['extra'])[0];
  if (extra !== undefined) { req.session.ingredients.extras.push(extra) };

  res.writeHead(303, { Location: '/' });
  return res.end();
}

export default addExtra;