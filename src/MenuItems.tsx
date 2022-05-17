import { MenuItemPropsInterface, MenuItemsInterface } from "./interfaces";

const breakfast: MenuItemPropsInterface[] = [
  {
    foodId: 1,
    foodName: "Blueberry Banana French Toast",
    foodType: "breakfast",
    description:
      "French Toast made with Japanese Shokupan bread. Topped with blueberries and bananas, dusted with powdered sugar, and finished with maple syrup.",
    imgPath: "/Images/Breakfast/Blueberry_Banana_French_Toast.jpg",
    price: 850,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Remove bananas",
          price: 0,
        },
        {
          optionName: "Remove blueberries",
          price: 0,
        },
        {
          optionName: "Remove powdered sugar",
          price: 0,
        },
      ],
      addOptions: [
        {
          optionName: "Add strawberries",
          price: 100,
        },
        {
          optionName: "Add whipped cream",
          price: 100,
        },
      ],
    },
  },
  {
    foodId: 2,
    foodName: "Homemade Croissants",
    foodType: "breakfast",
    description: "Baked at the break of dawn everyday.",
    imgPath: "/Images/Breakfast/Croissant.jpg",
    price: 350,
    foodOptions: {
      addOptions: [
        {
          optionName: "Side of butter",
          price: 100,
        },
        {
          optionName: "Side of orange marmalade",
          price: 100,
        },
      ],
    },
  },
  {
    foodId: 3,
    foodName: "Smoked Salmon Avocado Toast",
    foodType: "breakfast",
    description:
      "Local cold-smoked salmon placed atop a slice of sourdough avocado toast.",
    imgPath: "/Images/Breakfast/Smoked_Salmon_Avocado_Toast.jpg",
    price: 850,
  },
  {
    foodId: 4,
    foodName: "The Rise n' Shine",
    foodType: "breakfast",
    description:
      "What you need to hit the ground running. Sliced avocado fanned on top of a slice of ciabatta bread accompanied with a sunnyside egg.",
    imgPath: "/Images/Breakfast/The_Rise_N_Shine.jpg",
    price: 650,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Remove egg",
          price: 0,
        },
      ],
      addOptions: [
        {
          optionName: "Replace sliced avocado with avocado mash",
          price: 0,
        },
      ],
    },
  },
  {
    foodId: 5,
    foodName: "Gift of Elysium",
    foodType: "breakfast",
    description:
      "Made from the gardens of paradise (aka the local farmers market). Contains free-range eggs, spinach, feta cheese, red onion, and Monterey Jack cheese.",
    imgPath: "/Images/Breakfast/Gift_From_Elysium.jpg",
    price: 750,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Remove Monterey Jack cheese",
          price: 0,
        },
        {
          optionName: "Remove Feta cheese",
          price: 0,
        },
        {
          optionName: "Remove spinach",
          price: 0,
        },
        {
          optionName: "Remove red onion",
          price: 0,
        },
      ],
      addOptions: [
        {
          optionName: "Add extra cheese",
          price: 150,
        },
        {
          optionName: "Add a side of toast",
          price: 100,
        },
      ],
    },
  },
  {
    foodId: 6,
    foodName: "Just Toast",
    foodType: "breakfast",
    description:
      "Sometimes simple is best. Accompanied with butter and our homemade orange marmalade",
    imgPath: "/Images/Breakfast/Just_Toast.jpg",
    price: 350,
    foodOptions: {
      removeOptions: [
        {
          optionName: "No butter",
          price: 0,
        },
        {
          optionName: "No orange marmalade",
          price: 0,
        },
      ],
      addOptions: [
        {
          optionName: "Add an egg on the side",
          price: 75,
        },
      ],
    },
  },
  {
    foodId: 7,
    foodName: "Chocolate Crepes",
    foodType: "breakfast",
    description:
      "Two of our housemade crepes topped with a chocolate drizzle, powdered sugar, whipped creme, and a scoop of vanilla bean ice cream",
    imgPath: "/Images/Breakfast/Chocolate_Crepe.jpg",
    price: 900,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Remove ice cream",
          price: 0,
        },
        {
          optionName: "Remove whipped cream",
          price: 0,
        },
        {
          optionName: "Remove powdered sugar",
          price: 0,
        },
        {
          optionName: "Remove chocolate drizzle",
          price: 0,
        },
      ],
      addOptions: [
        {
          optionName: "Add strawberries",
          price: 150,
        },
        {
          optionName: "Add bananas",
          price: 100,
        },
        {
          optionName: "Add blueberries",
          price: 150,
        },
      ],
    },
  },
  {
    foodId: 8,
    foodName: "Strawberry Pancakes",
    foodType: "breakfast",
    description:
      "A full stack of pancakes adorned with powdered sugar, fresh strawberries, and housemade strawberry syrup",
    imgPath: "/Images/Breakfast/Strawberry_Pancakes.jpg",
    price: 950,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Remove strawberries",
          price: 0,
        },
        {
          optionName: "Remove powdered sugar",
          price: 0,
        },
      ],
      addOptions: [
        {
          optionName: "Add bananas",
          price: 100,
        },
        {
          optionName: "Add blueberries",
          price: 150,
        },
        {
          optionName: "Add whipped cream",
          price: 100,
        },
        {
          optionName: "replace strawberry syrup with maple syrup",
          price: 50,
        },
      ],
    },
  },
  {
    foodId: 9,
    foodName: "Triple Berry Waffles",
    foodType: "breakfast",
    description:
      "A massive waffle topped with vanilla crème fraîche and our triple berry compote",
    imgPath: "/Images/Breakfast/Triple_Berry_Waffles.jpg",
    price: 950,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Remove berry compote",
          price: 0,
        },
        {
          optionName: "Remove vanilla crème fraîche",
          price: 0,
        },
      ],
      addOptions: [
        {
          optionName: "Add bananas",
          price: 100,
        },
        {
          optionName: "Add whipped cream",
          price: 100,
        },
      ],
    },
  },
];

const beverages: MenuItemPropsInterface[] = [
  {
    foodId: 10,
    foodName: "Coffee",
    foodType: "beverages",
    description:
      "Pourover coffee that uses lightly roasted Colombian  washed beans which exhibit notes of green apple, cherry, and white tea.",
    imgPath: "/Images/Beverages/coffee.jpg",
    price: 300,
    foodOptions: {
      addOptions: [
        {
          optionName: "Decaf",
          price: 0,
        },
      ],
    },
  },
  {
    foodId: 11,
    foodName: "Latte",
    foodType: "beverages",
    description:
      "Our Lattes are produced with medium roasted beans from Peru that provide caramel, chocolate, and honey notes that work in tandem with the rich notes provided from the steamed milk.",
    imgPath: "/Images/Beverages/latte.jpg",
    price: 450,
    foodOptions: {
      addOptions: [
        {
          optionName: "Decaf",
          price: 0,
        },
        {
          optionName: "Add an extra shot",
          price: 100,
        },
      ],
    },
  },
  {
    foodId: 12,
    foodName: "Espresso",
    foodType: "beverages",
    description:
      "Made with beans produced from El Salvador that carry notes of citrus, jasmine, and brown sugar",
    imgPath: "/Images/Beverages/espresso.jpg",
    price: 250,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Single shot",
          price: -100,
        },
      ],
      addOptions: [
        {
          optionName: "Decaf",
          price: 0,
        },
        {
          optionName: "Add an extra shot",
          price: 100,
        },
      ],
    },
  },
  {
    foodId: 13,
    foodName: "Mimosa",
    foodType: "beverages",
    description:
      "Made with fresh squeezed orange juice, locally sourced champagne, and finished with mint and lime juice.",
    imgPath: "/Images/Beverages/Mimosa.jpg",
    price: 500,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Omit mint",
          price: 0,
        },
        {
          optionName: "Omit lime",
          price: 0,
        },
        {
          optionName: "Non-Alcoholic",
          price: 0,
        },
      ],
    },
  },
  {
    foodId: 14,
    foodName: "Sangria Lemonade",
    foodType: "beverages",
    description:
      "Made with housemade lemonade, locally sourced red wine, frozen raspberries, and garnished with lemon.",
    imgPath: "/Images/Beverages/Sangria_Lemonade.jpg",
    price: 550,
    foodOptions: {
      removeOptions: [
        {
          optionName: "Omit lemon",
          price: 0,
        },
        {
          optionName: "Non-Alcoholic",
          price: 0,
        },
      ],
    },
  },
  {
    foodId: 15,
    foodName: "English Breakfast Tea",
    foodType: "beverages",
    description:
      "We provide an English Breakfast tea that carries a toasty aroma and notes of honey. Goes great with milk and sugar.",
    imgPath: "/Images/Beverages/tea.jpg",
    price: 300,
  },
];

export const menuItemsArray = [...breakfast, ...beverages];

export const menuItems: MenuItemsInterface = {
  breakfast,
  beverages,
};
