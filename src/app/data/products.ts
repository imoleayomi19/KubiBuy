export interface Product{
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Teddy Bear",
    price: 19.99,
    image: "/images/teddy-bear.JPG",
    description: 'Soft and cuddly teddy bear perfect for nap time.',

  },
    {
    id: 2,
    name: "LEGO Classic 1500 Piece",
    price: 29.99,
    image: "/images/IMG_6766.JPG",
    description: "Creative building blocks for endless fun.",
  },
   {
    id: 3,
    name: "Kids Backpack",
    price: 24.99,
    image: "/images/IMG_6767.JPG",
    description: "Kane Kids Travel Backpack.",
  },
  {
    id: 4,
    name: "Kids Clothes.",
    price: 5.10,
    image: "/images/IMG_6770.JPG",
    description: "Smart Children Wears Terno Shirt Short.",
  },
  {
    id: 5,
    name: "Cute Teddy Bear",
    price: 19.00,
    image: "/images/teddy-bear2.JPG",
    description: 'Cute cuddly teddy bear perfect for nap time.',

  },
    {
    id: 6,
    name: "LEGO Classic Set",
    price: 59.99,
    image: "/images/IMG_6768.JPG",
    description: "Creative Bricks Box Building Kit.",
  },
   {
    id: 7,
    name: "Kids Backpack",
    price: 69.00,
    image: "/images/IMG_6769.JPG",
    description: "Stylish Purple BackPack With Four Pockets.",
  },
  {
    id: 8,
    name: "Children Clothing",
    price: 12.99,
    image: "/images/IMG_6772.JPG",
    description: "Cousannory Children Clothing, Girls' Dress, Hat.",
  },
  // {
  //   id: 8,
  //   name: "Coloring Book Set",
  //   price: 12.99,
  //   image: "",
  //   description: "Includes crayons and 50 fun pages to color!",
  // },
]