// const priceFormatter = (price: number) => {
//   const newFormat = Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     maximumSignificantDigits: 3,
//   }).format(price);

//   return newFormat;
// };

// export default priceFormatter;

// app/utils/price-formatter.tsx
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export default formatPrice; // Pastikan ada baris ini!
