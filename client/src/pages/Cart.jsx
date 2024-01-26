import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cart/cartSlice";
import CartItem from "../components/molecule/Cart/CartItem";
import CheckoutNavbar from "../components/organism/Navbar/CheckoutNavbar";
import EmptyCart from "../components/molecule/Cart/EmptyCart";
import CustomButton from "../components/Atoms/Buttons/CustomButton";
import { calculateTotal } from "../redux/cart/cartUtils";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const token = localStorage.getItem("token");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { formattedTotalPrice, totalQuantity } = calculateTotal(cart);
  const [isError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCart = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      for (const item of cart) {
        console.log("works")
        const formattedCartItem = {
          id_product: item.id,
          qty: item.quantity,
          price: item.price,
        };
  
        const response = await axios.post(
          "http://localhost:5000/api/v1/addToCart",
          formattedCartItem,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Make sure 'token' is defined
            },
          }
        );
  
        const data = response.data;
        const dataError = data.error || "An error occurred before checkout.";
  
        if (response.status === 200) {
          // Handle successful backend response for each item
          // Optionally, you can do something here if needed
        } else {
          // Handle unexpected structure in backend response
          setIsLoading(false);
          setError(dataError);
          console.error(dataError);
          return; // Stop processing further items on error
        }
      }
  
      //  execute after all items are processed
      dispatch(clearCart());
      navigate("/checkout");
    } catch (error) {
      setIsLoading(false);
      const serverError = error.response?.data?.message;
  
      if (serverError) {
        setError(serverError);
        console.error("Server error before checkout:", serverError);
      } else {
        setError("An unexpected error occurred before checkout.");
        console.error("Unexpected error in server:", error.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col max-w-[100vw] h-full bg-white">
      <CheckoutNavbar activeStep={1} />
      <div className="flex flex-col gap-4 pt-4 bg-gray-100">
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>

      {cart.length > 0 ? (
        <div>
          <div className="p-[40px] bg-gray-100 text-gray-400">
            <p>
              Saat Anda menandatangani tanda terima pemesanan produk, Anda
              dianggap telah menerima dan memeriksa secara teliti produk
              tersebut. Oleh karena itu, Anda tidak berhak melakukan pembatalan
              dan/atau pengembalian produk tersebut.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <CustomButton
                onClick={() => {
                  dispatch(clearCart());
                }}
                text="Hapus"
                intent="accent_nobg"
              />
            </div>
            <div className="flex items-center gap-4">
              <p className="total__p">
                total ({totalQuantity} items) :{" "}
                <strong>Rp {formattedTotalPrice}</strong>
              </p>
              <CustomButton onClick={handleCart} text="Bayar" intent="accent_bg" />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
