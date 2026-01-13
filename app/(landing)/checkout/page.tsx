"use client";

import { useState } from "react";
import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { push } = useRouter();
  const { customerInfo, setCustomerInfo } = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: null,
    customerAddress: "",
  });

  const handlePayment = () => {
    if (!formData.customerName || !formData.customerContact || !formData.customerAddress) {
      alert("Please fill in all fields");
      return;
    }

    setCustomerInfo(formData);
    push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-20">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={handlePayment} />
          {/* <p>{JSON.stringify(customerInfo)}</p> */}
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