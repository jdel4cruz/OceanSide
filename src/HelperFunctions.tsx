//Interfaces
import { MenuItemPropsInterface, CartItemInterface } from "./interfaces";

export const totalPrice = (
  extraOptions: { [index: string]: boolean },
  menuItem: MenuItemPropsInterface,
  qty: number
) => {
  const activeOptions = Object.keys(extraOptions);
  const menuOptions = menuItem.foodOptions;
  const addOptions = menuOptions?.addOptions;
  const removeOptions = menuOptions?.removeOptions;

  let totalPrice = menuItem.price;

  activeOptions.forEach((option) => {
    if (addOptions !== undefined) {
      const addOption = addOptions.find(
        (element) => element.optionName === option
      );
      if (addOption !== undefined) {
        totalPrice += addOption.price;
      }
    }

    if (removeOptions !== undefined) {
      const removeOption = removeOptions.find(
        (element) => element.optionName === option
      );
      if (removeOption !== undefined) {
        totalPrice += removeOption.price;
      }
    }
  });

  return totalPrice * qty;
};

export const cartTotalPrice = (cart: CartItemInterface[]) => {
  const total = cart.reduce((sum, current) => {
    return sum + current.price;
  }, 0);

  return total;
};

export const priceToNumber = (stringPrice: string) => {
  if (stringPrice.includes(".")) {
    const regex = /(?<=\.)\d{1,2}/;
    const match = stringPrice.match(regex);
    if (match !== null) {
      const cents = match[0];

      if (cents.length === 1) {
        return Number(`${stringPrice.replace(".", "")}0`);
      }

      return Number(stringPrice.replace(".", ""));
    }

    return Number(stringPrice.replace(".", "00"));
  }

  return Number(stringPrice) * 100;
};

export const priceToString = (priceNumber: number) => {
  const priceString = Math.round(priceNumber).toString();

  if (priceNumber === 0) {
    return "Free";
  }

  if (priceString.length === 1) {
    return `0.0${priceString}`;
  }
  if (priceString.length === 2) {
    return `0.${priceString}`;
  }

  const dollars = priceString.slice(0, priceString.length - 2);
  const cents = priceString.slice(-2);

  return `${dollars}.${cents}`;
};
