import { IFormInputs } from "./interfaces";

import { priceToNumber } from "./HelperFunctions";

export const fetchStripeCheckoutUrl = async (form: IFormInputs) => {
  console.log(form.cart);
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/create-checkout-session`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: form.cart.map((cartItem) => ({
          name: cartItem.menuItem.foodName,
          price: cartItem.price,
          metaData: cartItem.options,
          quantity: cartItem.qty,
        })),
        customer_details: {
          name: `${form.firstName} ${form.lastName}`,
          email: `${form.email}`,
          phone: `${form.phone}`,
        },
        tips: priceToNumber(form.tips),
      }),
    }
  );

  return response;
};
