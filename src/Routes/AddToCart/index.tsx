import { useParams } from "react-router";

//Components
import MenuImgCard from "../../Components/MenuImgCard";
import FoodOptions from "../../Components/FoodOptions";

//Styles
import { Wrapper, MenuContainer } from "./AddToCart.styles";

//Interfaces
import { MenuItemProps } from "../../interfaces";

const menuItems: MenuItemProps[] = [
  {
    foodName: "Blueberry Banana French Toast",
    description:
      "French Toast made with Japanese Shokupan bread. Topped with blueberries and bananas, dusted with powdered sugar, and finished with maple syrup.",
    imgPath: "/Images/Blueberry_Banana_French_Toast.jpg",
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
    imgPath: "/Images/Croissant.jpg",
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
    imgPath: "/Images/Smoked_Salmon_Avocado_Toast.jpg",
  },
  {
    foodName: "The Rise n' Shine",
    description:
      "What you need to hit the ground running. Sliced avocado fanned on top of a slice of ciabatta bread accompanied with a sunnyside egg.",
    imgPath: "/Images/The_Rise_N_Shine.jpg",

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
    imgPath: "/Images/Gift_From_Elysium.jpg",
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
    imgPath: "/Images/Just_Toast.jpg",

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
    imgPath: "/Images/Chocolate_Crepe.jpg",

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
    imgPath: "/Images/Strawberry_Pancakes.jpg",
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
    imgPath: "/Images/Triple_Berry_Waffles.jpg",
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

const AddToCart = () => {
  const { foodId } = useParams();

  let menuItem;
  if (foodId !== undefined) {
    console.log(menuItems[+foodId]);
    menuItem = menuItems[+foodId];
  }

  return (
    <Wrapper disableGutters>
      <MenuContainer>
        {menuItem !== undefined ? (
          <MenuImgCard menuItem={menuItem} />
        ) : (
          <div>ERROR</div>
        )}
      </MenuContainer>
    </Wrapper>
  );
};

export default AddToCart;
