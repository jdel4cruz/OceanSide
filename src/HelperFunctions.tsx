export const priceToString = (priceNumber: number) => {
  const priceString = priceNumber.toString();

  if (priceNumber === 0) {
    return "Free";
  }

  if (priceString.length === 1) {
    return `$0.0${priceString}`;
  }
  if (priceString.length === 2) {
    return `$0.${priceString}`;
  }

  const dollars = priceString.slice(0, priceString.length - 2);
  const cents = priceString.slice(-2);

  return `$${dollars}.${cents}`;
};
