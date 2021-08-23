import { default as Ingredients } from '../../models/ingredientsModel.js';

const saveBurger = async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  console.log(ingredientsModel);
  const ingredientsObj = req.session.ingredients;
  const ingredientsModel = new Ingredients(ingredientsObj);
  await ingredientsModel.save();

  res.writeHead(303, {
    Location: '/'
  });
  return res.end();
};

export default saveBurger;