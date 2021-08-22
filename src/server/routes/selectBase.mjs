import {bases as allBases} from '../../data';

const selectBase = (req, res) => {
  req.session.ingredients.base = allBases.filter(base => base.name === req.body['base'])[0];

  res.writeHead(303,
    { Location: '/' });

  return res.end();
}

export default selectBase;