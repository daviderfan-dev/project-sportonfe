import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";

const productList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Running",
    price: 440000,
    imgUrl: "product-4.png",
  },
  {
    name: "SportsOn Product 5",
    category: "Running",
    price: 550000,
    imgUrl: "product-5.png",
  },
  {
    name: "SportsOn Product 6",
    category: "Running",
    price: 650000,
    imgUrl: "product-6.png",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32 mb-32">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {productList.map((product, index) => (
          <Link
            href={`product/${product.name}`}
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3 ">
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;


// const ProductsSection = () => {
//   return (
//     <section id="products-section" className="container mx-auto mt-20 px-5">
//       <h2 className="font-bold italic text-3xl md:text-4xl text-center mb-11">
//         <span className="text-primary">OUR </span>PRODUCTS
//       </h2>

//       {/* Responsif: 1 kolom (HP), 2 kolom (Tablet), 4 kolom (Desktop) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {productList.map((product, index) => (
//           <Link
//             href="#"
//             key={index}
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//             className="p-3 bg-white border border-gray-100 rounded-xl hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="bg-gray-50 aspect-square w-full flex justify-center items-center relative rounded-lg overflow-hidden">
//               <Image
//                 src={`/images/products/${product.imgUrl}`}
//                 alt={product.name}
//                 width={300}
//                 height={300}
//                 className="aspect-square object-contain hover:scale-110 transition-transform duration-500"
//               />
//               <Button className="w-10 h-10 p-0! absolute right-3 top-3 rounded-full">
//                 <FiPlus size={20} />
//               </Button>
//             </div>

//             <h3 className="font-bold text-lg mt-4 text-gray-800">{product.name}</h3>
//             <div className="flex justify-between items-center mt-2 mb-4">
//               <span className="text-gray-400 text-sm">{product.category}</span>
//               <span className="font-bold text-primary text-lg">
//                 {Intl.NumberFormat("id-ID", {
//                   style: "currency",
//                   currency: "IDR",
//                   maximumFractionDigits: 0,
//                 }).format(product.price)}
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;