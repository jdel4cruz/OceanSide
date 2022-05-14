import { Grid } from "@mui/material";
import { useParams } from "react-router";
//Interfaces
import { MenuItemProps } from "../../interfaces";

//Components
import MenuCard from "../MenuCard";

//Styles
import { StyledGrid } from "./MenuGrid.styles";

const breakfast: MenuItemProps[] = [
  {
    foodName: "Blueberry Banana French Toast",
    description:
      "French Toast made with Japanese Shokupan bread. Topped with blueberries and bananas, dusted with powdered sugar, and finished with maple syrup.",
    imgPath: "/Images/Breakfast/Blueberry_Banana_French_Toast.jpg",
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
          price: 1,
        },
        {
          optionName: "Add whipped cream",
          price: 1,
        },
      ],
    },
  },
  {
    foodName: "Homemade Croissants",
    description: "Baked at the break of dawn everyday.",
    imgPath: "/Images/Breakfast/Croissant.jpg",
    foodOptions: {
      addOptions: [
        {
          optionName: "Side of butter",
          price: 1,
        },
        {
          optionName: "Side of orange marmalade",
          price: 1,
        },
      ],
    },
  },
  {
    foodName: "Smoked Salmon Avocado Toast",
    description:
      "Local cold-smoked salmon placed atop a slice of sourdough avocado toast.",
    imgPath: "/Images/Breakfast/Smoked_Salmon_Avocado_Toast.jpg",
  },
  {
    foodName: "The Rise n' Shine",
    description:
      "What you need to hit the ground running. Sliced avocado fanned on top of a slice of ciabatta bread accompanied with a sunnyside egg.",
    imgPath: "/Images/Breakfast/The_Rise_N_Shine.jpg",

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
    foodName: "Gift of Elysium",
    description:
      "Made from the gardens of paradise (aka the local farmers market). Contains free-range eggs, spinach, feta cheese, red onion, and Monterey Jack cheese.",
    imgPath: "/Images/Breakfast/Gift_From_Elysium.jpg",
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
          price: 1.5,
        },
        {
          optionName: "Add a side of toast",
          price: 1,
        },
      ],
    },
  },
  {
    foodName: "Just Toast",
    description:
      "Sometimes simple is best. Accompanied with butter and our homemade orange marmalade",
    imgPath: "/Images/Breakfast/Just_Toast.jpg",

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
          price: 0.75,
        },
      ],
    },
  },
  {
    foodName: "Chocolate Crepes",
    description:
      "Two of our housemade crepes topped with a chocolate drizzle, powdered sugar, whipped creme, and a scoop of vanilla bean ice cream",
    imgPath: "/Images/Breakfast/Chocolate_Crepe.jpg",

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
          price: 1.5,
        },
        {
          optionName: "Add bananas",
          price: 1,
        },
        {
          optionName: "Add blueberries",
          price: 1.5,
        },
      ],
    },
  },
  {
    foodName: "Strawberry Pancakes",
    description:
      "A full stack of pancakes adorned with powdered sugar, fresh strawberries, and housemade strawberry syrup",
    imgPath: "/Images/Breakfast/Strawberry_Pancakes.jpg",
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
          price: 1,
        },
        {
          optionName: "Add blueberries",
          price: 1.5,
        },
        {
          optionName: "Add whipped cream",
          price: 1,
        },
        {
          optionName: "replace strawberry syrup with maple syrup",
          price: 0.5,
        },
      ],
    },
  },
  {
    foodName: "Triple Berry Waffles",
    description:
      "A massive waffle topped with vanilla crème fraîche and our triple berry compote",
    imgPath: "/Images/Breakfast/Triple_Berry_Waffles.jpg",
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
          price: 1,
        },
        {
          optionName: "Add whipped cream",
          price: 1,
        },
      ],
    },
  },
];

const beverages: MenuItemProps[] = [
  {
    foodName: "Coffee",
    description:
      "Pourover coffee that uses lightly roasted Colombian  washed beans which exhibit notes of green apple, cherry, and white tea.",
    imgPath: "/Images/Beverages/coffee.jpg",
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
    foodName: "Latte",
    description:
      "Our Lattes are produced with medium roasted beans from Peru that provide caramel, chocolate, and honey notes that work in tandem with the rich notes provided from the steamed milk.",
    imgPath: "/Images/Beverages/latte.jpg",
    foodOptions: {
      addOptions: [
        {
          optionName: "Decaf",
          price: 0,
        },
        {
          optionName: "Add an extra shot",
          price: 1,
        },
      ],
    },
  },
  {
    foodName: "Espresso",
    description:
      "Made with beans produced from El Salvador that carry notes of citrus, jasmine, and brown sugar",
    imgPath: "/Images/Beverages/espresso.jpg",
    foodOptions: {
      removeOptions: [
        {
          optionName: "Single shot",
          price: -1,
        },
      ],
      addOptions: [
        {
          optionName: "Decaf",
          price: 0,
        },
        {
          optionName: "Add an extra shot",
          price: 1,
        },
      ],
    },
  },
  {
    foodName: "Mimosa",
    description:
      "Made with fresh squeezed orange juice, locally sourced champagne, and finished with mint and lime juice.",
    imgPath: "/Images/Beverages/Mimosa.jpg",
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
    foodName: "Sangria Lemonade",
    description:
      "Made with housemade lemonade, locally sourced red wine, frozen raspberries, and garnished with lemon.",
    imgPath: "/Images/Beverages/Sangria_Lemonade.jpg",
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
    foodName: "English Breakfast Tea",
    description:
      "We provide an English Breakfast tea that carries a toasty aroma and notes of honey. Goes great with milk and sugar.",
    imgPath: "/Images/Beverages/tea.jpg",
  },
];

// type FoodType = "breakfast" | "beverages";

interface MenuItemsInterface {
  [index: string]: MenuItemProps[];
}

const menuItems: MenuItemsInterface = {
  breakfast,
  beverages,
};

const MenuGrid = () => {
  const { foodType } = useParams();

  let activeMenu: MenuItemProps[] | undefined;
  if (foodType !== undefined) {
    activeMenu = menuItems[foodType];
  }

  return (
    <StyledGrid container spacing={1}>
      {activeMenu !== undefined ? (
        activeMenu.map((menuItem: MenuItemProps, i: number) => (
          <Grid item xs={11} sm={6} key={i}>
            <MenuCard menuItem={menuItem} />
          </Grid>
        ))
      ) : (
        <div>error</div>
      )}
    </StyledGrid>
  );
};

export default MenuGrid;
