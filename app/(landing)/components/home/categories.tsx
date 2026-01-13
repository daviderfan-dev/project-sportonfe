import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// const categoryList = [
//   {
//     name: "Running",
//     imgUrl: "category-running.png",
//   },
//   {
//     name: "Tennis",
//     imgUrl: "category-tennis.png",
//   },
//   {
//     name: "Basketball",
//     imgUrl: "category-basketball.png",
//   },
//   {
//     name: "Football",
//     imgUrl: "category-football.png",
//   },
//   {
//     name: "Badminton",
//     imgUrl: "category-badminton.png",
//   },
//   {
//     name: "Swimming",
//     imgUrl: "category-swimming.png",
//   },
// ];
type TCategoriesProps = {
  categories: Category[];
}

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
        {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
            key={category._id}
          >
            <div className="self-center">
              <Image
                src={getImageUrl(category.imageUrl)}
                width={86}
                height="86"
                alt={category.name}
                className="mb-[10px]"
              />
              <div className="text-primary font-medium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;


// import Image from "next/image";
// import Link from "next/link";
// import { FiArrowRight } from "react-icons/fi";

// const categoryList = [
//   {
//     name: "Running",
//     imgUrl: "category-running.png",
//   },
//   {
//     name: "Tennis",
//     imgUrl: "category-tennis.png",
//   },
//   {
//     name: "Basketball",
//     imgUrl: "category-basketball.png",
//   },
//   {
//     name: "Football",
//     imgUrl: "category-football.png",
//   },
//   {
//     name: "Badminton",
//     imgUrl: "category-badminton.png",
//   },
//   {
//     name: "Swimming",
//     imgUrl: "category-swimming.png",
//   },
// ];

// const CategoriesSection = () => {
//   return (
//     <section id="categories-section" className="container mx-auto mt-20 px-5">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
//         <h2 className="text-3xl font-bold italic text-center md:text-left" data-aos="fade-right">
//           BROWSE BY <br className="hidden md:block" /> CATEGORIES
//         </h2>
//         <p className="text-gray-500 text-center md:text-right max-w-sm" data-aos="fade-left">
//           Select your favorite sport and find the best gear tailored for your performance.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//         {categoryList.map((category, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//             className="group flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-2xl hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
//           >
//             <div className="w-16 h-16 mb-4 relative transition-transform duration-300 group-hover:scale-110">
//               <Image
//                 src={`/images/categories/${category.imgUrl}`}
//                 alt={category.name}
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             <span className="font-semibold text-gray-700 group-hover:text-primary transition-colors">
//               {category.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;