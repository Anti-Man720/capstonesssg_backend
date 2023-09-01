/*import pizzaImage from "./foods/Pizza-Dough_1.jpg";
import PhillyCheesesteakImage from "./foods/Philly-Cheesesteak-2.jpg";
import GourmetBurgImage from "./foods/loaded-burgers-featured-3.jpg";
import CeasarSalImage from "./foods/grilled-caesar-chicken-salad-6.jpg";
import wingsImage from "./foods/delish-fried-chicken-wings-5.jpg";
import chzfriesImage from "./foods/cheese-fries-4.jpg";*/

export const sample_foods = [
  {
    id: 1,
    name: "Pizza",
    cookTime: "30 mins",
    price: 10,
    favorite: false,
    origin: ["New York"],
    stars: 5,
    imageUrl:
      "https://raw.githubusercontent.com/Anti-Man720/FoodappImages/main/Pizza-Dough_1.jpg",

    tags: ["pizza", "italian", "cheese", "pepperoni", "tomato", "dough"],
  },
  {
    id: 2,
    name: "Philly Cheesesteak",
    cookTime: "20 mins",
    price: 15,
    favorite: true,
    origin: ["Philadelphia", "Persia", "Italy"],
    stars: 5,
    imageUrl:
      "https://raw.githubusercontent.com/Anti-Man720/FoodappImages/main/Philly-Cheesesteak-2.jpg",

    tags: ["SlowFood", "Lunch", "apetizers"],
  },
  {
    id: 3,
    name: "Gourmet Hamburger",
    cookTime: "18 mins",
    price: 22,
    favorite: false,
    origin: ["Germany", "USA"],
    stars: 4,
    imageUrl:
      "https://raw.githubusercontent.com/Anti-Man720/FoodappImages/main/loaded-burgers-featured-3.jpg",

    tags: ["SlowFood", "Hamburger", "Lunch", "Dinner", "Beef"],
  },
  {
    id: 4,
    name: "Loaded French Fries",
    cookTime: "10 mins",
    price: 8,
    favorite: true,
    origin: ["Belgium", "France", "USA"],
    stars: 5,
    imageUrl:
      "https://raw.githubusercontent.com/Anti-Man720/FoodappImages/main/cheese-fries-4.jpg",
    tags: [
      "FastFood",
      "Fry",
      "Lunch",
      "Dinner",
      "Potato",
      "Cheese",
      "Bacon",
      "Sour Cream",
      "Chives",
      "Jalapeno",
      "apetizers",
    ],
  },
  {
    id: "5",
    name: "Dozen Delish Chicken Wings",
    cookTime: "12 mins",
    price: 14,
    favorite: false,
    origin: ["USA", "Africa"],
    stars: 5,
    imageUrl:
      "https://raw.githubusercontent.com/Anti-Man720/FoodappImages/main/delish-fried-chicken-wings-5.jpg",

    tags: [
      "apetizers",
      "Fry",
      "Chicken",
      "Lunch",
      "Dinner",
      "FastFood",
      "Wings",
      "Hot",
      "Spicy",
    ],
  },
  {
    id: 6,
    name: "Grilled Chicken Caesar Salad",
    cookTime: "5 mins",
    price: 12,
    favorite: true,
    origin: ["USA", "Italy"],
    stars: 3,
    imageUrl:
      "https://raw.githubusercontent.com/Anti-Man720/FoodappImages/main/grilled-caesar-chicken-salad-6.jpg",

    tags: ["Lunch", "Dinner", "Salad", "Chicken", "Caesar", "apetizers"],
  },
];

export const sample_tags = [
  { name: "All", count: 6 },
  { name: "FastFood", count: 3 },
  { name: "Pizza", count: 1 },
  { name: "Lunch", count: 4 },
  { name: "SlowFood", count: 3 },
  { name: "Hamburger", count: 1 },
  { name: "Fry", count: 2 },
  { name: "Salad", count: 1 },
];

export const sample_users = [
  {
    id: 1,
    name: "Bruce Wayne",
    email: "theDarkKnight@gmail.com",
    password: "12joker34",
    address: "Gotham City",
    isAdmin: false,
  },
  {
    id: 2,
    name: "Clark Kent",
    email: "manOfsteel@gmail.com",
    password: "12brainiac34",
    address: "Smallville KS",
    isAdmin: true,
  },
  {
    id: 3,
    name: "Lex Luther",
    email: "Fsuperman@gmail.com",
    password: "12smartestman34",
    address: "Metropolis",
    isAdmin: false,
  },
];
