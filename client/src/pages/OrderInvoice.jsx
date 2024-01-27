import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/Atoms/CheckoutItem/ProductItem";
import TotalPrice from "../components/Atoms/CheckoutItem/TotalPrice";

const OrderInvoice = ({ id }) => {
  const [dataAddress, setDataAddress] = useState([]);
  const token = localStorage.getItem("token");

  const getCheckout = async () => {
    const response = await axios(
      `${import.meta.env.VITE_APP_BASEURL}/checkout`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setDataAddress(response.data);
  };

  useEffect(() => {
    getCheckout();
  }, []);

  const dataCheckout = dataAddress.data || [];

  const cartItems = dataCheckout.cartItems || [];

  let totalCost = 0;

  // Loop through each cart item, calculate the cost (price * qty) for each item, and add it to the total
  cartItems.forEach((item) => {
    const itemCost = item.price * item.qty;
    totalCost += itemCost;
  });

  console.log(cartItems);

  // console.log(dataCheckout.length > 0 && dataCheckout.map(checkout));

  return (
    <div className="h-[100vh] bg-background p-8" id={id}>
      <h1 className="text-3xl font-bold mb-4">Order Invoice - Xiaomi</h1>

      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <p>Order Number: #123456</p>
          <p>Date: January 26, 2024</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Customer Information</h2>
          <p>Nama: {dataCheckout.fullname}</p>
          <p>Email: {dataCheckout.email}</p>
          <p>
            Alamat: {dataCheckout.full_address}, {dataCheckout.villages},{" "}
            {dataCheckout.subdistrict}, {dataCheckout.city},{" "}
            <p>
              {dataCheckout.province}, {dataCheckout.postal_code}{" "}
            </p>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4">Product Details</h2>
          {cartItems.map((cart) => (
            <ProductItem
              className="grid grid-cols-4"
              Image={cart.image}
              Tittle={cart.name_product}
              Qty={cart.qty}
              Price={cart.price}
            />
          ))}
          <div className="py-4 grid grid-cols-2">
            <div className="flex">Total</div>
            <TotalPrice className="text-right" TotalPrice={totalCost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInvoice;
