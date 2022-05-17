export const priceToString = (priceNumber: number) => {
  const priceString = priceNumber.toString();
  const dollars = priceString.slice(0, priceString.length - 2);
  console.log(dollars);
  const cents = priceString.slice(-2);
  console.log(cents);

  return `${dollars}.${cents}`;
};
