import { IFormInputs } from "./interfaces";

export const fetchStripeCheckoutUrl = async (form: IFormInputs) => {
  const response = await fetch(process.env.REACT_APP_SERVER_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application,json",
    },
    body: JSON.stringify({
      items: form.cart.map((cartItem) => ({
        name: cartItem.menuItem.foodName,
        price: cartItem.price,
        metaData: cartItem.options,
      })),
      customer_details: {
        name: `${form.firstName} ${form.lastName}`,
        email: `${form.email}`,
        phone: `${form.phone}`,
      },
    }),
  });

  return await response.json();
};
