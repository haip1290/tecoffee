import mocha from "../assets/products/mocha.jpg";
import tepina from "../assets/products/tepina.jpg";
import cocomatcha from "../assets/products/cocomatcha.jpg";
import dirtymatcha from "../assets/products/dirtymatcha.jpg";
import teroot from "../assets/products/teroot.jpg";

// mock data
const menu = [
  {
    id: 1,
    name: "Mocha",
    description: "Slow-dripped local beans with a clean, floral finish.",
    price: "45k",
    image: mocha,
  },
  {
    id: 2,
    name: "Coldbrew",
    description: "Smooth micro-foam with a hint of natural sweetness.",
    price: "55k",
    image: tepina,
  },
  {
    id: 3,
    name: "Coco Matcha",
    description: "24-hour steep, topped with crisp tonic and lime.",
    price: "60k",
    image: cocomatcha,
  },
  {
    id: 4,
    name: "Dirty Matcha",
    description: "24-hour steep, topped with crisp tonic and lime.",
    price: "60k",
    image: dirtymatcha,
  },
  {
    id: 5,
    name: "Te root",
    description: "24-hour steep, topped with crisp tonic and lime.",
    price: "60k",
    image: teroot,
  },
];

export default menu;
