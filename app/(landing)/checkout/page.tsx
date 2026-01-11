import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";

const Checkout = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation />
          <CartItems />
        </div>
      </div>
    </main>
  );
};

export default Checkout;

// app/(landing)/checkout/page.tsx
// import CartItems from "@/app/(landing)/components/checkout/cart-items";
// import OrderInformation from "@/app/(landing)/components/checkout/order-information";

// const CheckoutPage = () => { // Ganti nama agar tidak bentrok jika perlu
//   return (
//     <main className="bg-gray-100 min-h-[80vh]">
//       <div className="max-w-6xl mx-auto py-10 lg:py-16 px-5">
//         <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-12 italic">
//           Checkout Now
//         </h1>
//         {/* Gunakan grid responsif agar tidak berantakan di layar kecil */}
//         <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-14 items-start">
//           <OrderInformation />
//           <CartItems />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default CheckoutPage;