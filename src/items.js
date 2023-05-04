import chicken65 from "./chicken-65.jpg";
import chickenThanthuri from "./chicken-thanthuri.jpg";
// import chickenLolipop from "./chicken-lolipop.jpg";
import chickenPalak from "./palak-chicken.jpg";
import chickenGravy from "./chicken-gravy.jpg";
import pepperchicken from "./pepper-chicken.jpg";

const pizzas = [
  {
    name: "CHICKEN-65",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "starter",
    image:
      "https://cdn.pixabay.com/photo/2017/06/28/17/40/chicken-2451482_960_720.jpg",
    // "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    // "https://www.shutterstock.com/image-photo/chicken-65-spicy-deep-fried-260nw-1752644126.jpg",

    description: "It is very tasty and it goes well with sambar and rasam",
  },
  {
    name: "CHICKEN TANDOORI",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 300,
        medium: 450,
        large: 600,
      },
    ],
    category: "starter",
    image:
      "https://thumbs.dreamstime.com/b/plate-delicious-tandoori-chicken-indian-cuisine-delicious-homemade-tandoori-chicken-salads-dark-background-famous-128488122.jpg",
    description: "It is oil free and good for health",
  },
  {
    name: "chickenLolipop",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 350,
        large: 500,
      },
    ],
    category: "starter",
    image: "https://images6.alphacoders.com/439/thumb-1920-439410.jpg",

    description: "It is a very good starter.Kids like very much",
  },
  {
    name: "BUTTER CHICKEN ",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "gravy",
    image: "https://static.toiimg.com/thumb/53205522.cms?width=1200&height=850",

    description:
      "I suit for all types rice and specially for idly , dosa and chappathy",
  },
  {
    name: "CHICKEN GRAVY",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 300,
        medium: 450,
        large: 600,
      },
    ],
    category: "gravy",
    image: "https://thumbs.dreamstime.com/b/chicken-curry-29197236.jpg",
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "PEPPER CHICKEN",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 350,
        large: 500,
      },
    ],
    category: "gravy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQty9rL4u95q8ihlXF1frsg1jHtNyGh9u7tzg&usqp=CAU",

    description: "Pepper Barbecue Chicken I Cheese",
  },
];

export default pizzas;
