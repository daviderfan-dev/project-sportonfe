import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image
          src="/images/img-basketball.png"
          width={432}
          height={423}
          alt="image sporton"
          className="grayscale absolute left-0 -top-20"
        />
        <div className="relative ml-40 w-full">
          <div className="text-primary italic">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-14">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
        <Image
          src="/images/img-hero.png"
          width={700}
          height={950}
          alt="image sporton hero"
          className="absolute -right-5 top-1/2 -translate-y-1/2"
        />
      </div>
      <Image
        src="/images/img-ornament-hero.svg"
        width={420}
        height={420}
        alt="image sporton"
        className="absolute -right-[200px] top-1/2 -translate-y-1/2 "
      />
    </section>
  );
};

export default HeroSection;


// import { FiFastForward } from "react-icons/fi";
// import Button from "../ui/button";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section id="hero-section" className="container mx-auto min-h-screen flex items-center px-5 py-20 lg:py-0">
//       <div className="grid lg:grid-cols-2 gap-10 items-center w-full relative">

//         {/* Sisi Kiri: Teks Konten */}
//         <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
//           <div className="text-primary italic font-medium" data-aos="fade-right">
//             Friday Sale, 50%
//           </div>
//           <h1
//             className="font-extrabold text-5xl md:text-7xl lg:text-[90px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent"
//             data-aos="fade-right"
//             data-aos-delay="200"
//           >
//             WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
//           </h1>
//           <p className="w-full lg:w-3/4 mt-6 lg:mt-10 leading-loose text-gray-600 mx-auto lg:mx-0" data-aos="fade-right" data-aos-delay="400">
//             Engineered for endurance and designed for speed. Experience gear
//             that moves as fast as you do. Premium fabrics. Unmatched comfort.
//             Limitless motion.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="600">
//             <Button>
//               Explore More <FiFastForward />
//             </Button>
//             <Button variant="ghost" className="flex items-center gap-2">
//               Watch Video
//               <Image
//                 src="/images/icon-play-video.svg"
//                 alt="icon playvideo"
//                 width={29}
//                 height={29}
//               />
//             </Button>
//           </div>
//         </div>

//         {/* Sisi Kanan: Gambar Utama */}
//         <div className="relative order-1 lg:order-2 flex justify-center z-1" data-aos="zoom-in" data-aos-delay="400">
//           {/* Gambar Ornamen Belakang (Opsional) */}
//           <Image
//             src="/images/img-ornament-hero.svg"
//             width={400}
//             height={400}
//             alt="ornament"
//             className="absolute z-0 opacity-50 lg:opacity-100"
//           />
//           {/* Gambar Produk Utama */}
//           <Image
//             src="/images/img-hero.png"
//             width={600}
//             height={800}
//             alt="image sporton hero"
//             className="relative z-10 w-full h-auto max-w-[500px] lg:max-w-none"
//           />
//         </div>

//         {/* Gambar Tambahan (Bola Basket) - Disembunyikan di Mobile agar tidak berantakan */}
//         <Image
//           src="/images/img-basketball.png"
//           width={200}
//           height={200}
//           alt="image sporton"
//           className="grayscale absolute left-0 -bottom-10 opacity-20 lg:opacity-100 hidden md:block"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;