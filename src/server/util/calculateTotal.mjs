const calculateTotal = (ingredients) => {
  let total = 0;
  if (ingredients.protein !== undefined) {
    total += ingredients.protein.double ? ingredients.protein.price * 1.5 : ingredients.protein.price;
  }
  if (ingredients.extras.length > 0) ingredients.extras.map(extra => total += extra.price);
  return total;
}

export default calculateTotal;