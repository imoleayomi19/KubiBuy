// 'use client';

// import { useState } from 'react';
// import { products, Product } from "@/app/data/products"; // 👈 Import from data file

//  function Shop() {
//   // Cart state
//   const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  
//   // Add to cart handler
//   const handleAddToCart = (productId: number) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === productId);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === productId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { id: productId, quantity: 1 }];
//       }
//     });
//   };

//   // Optional: Show cart count for feedback
//   const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-pink-50 p-6">
//       <header className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-purple-600">🧸 Kids’ Shopping Store</h1>
//         <p className="text-lg text-gray-600 mt-2">Fun, safe, and adorable items for your little ones!</p>
//         <div className="mt-4 p-3 bg-purple-100 rounded-lg inline-block">
//           🛒 Cart Items: <span className="font-bold"></span>
//         </div>
//       </header>

//       <main>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 flex-1 flex flex-col">
//                 <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
//                 <p className="text-gray-600 mt-2 text-sm flex-1">{product.description}</p>
//                 <p className="text-lg font-bold text-green-600 mt-4">${product.price.toFixed(2)}</p>
//                 <button
//                   onClick={() => handleAddToCart(product.id)}
//                   className="mt-4 py-2 px-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
//                 > 
//                   ➕ Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Optional: Display cart items */}
//       <div className="mt-12 p-4 bg-gray-100 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">🛒 Your Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul>
//             {cart.map((item) => {
//               const product = products.find((p) => p.id === item.id) as Product;
//               return (
//                 <li key={item.id} className="mb-2">
//                   {product.name} x {item.quantity} — $
//                   {(product.price * item.quantity).toFixed(2)}
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
//  }
  
// export default Shop;