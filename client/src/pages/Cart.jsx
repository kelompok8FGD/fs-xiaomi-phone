import React from 'react'
import { useSelector } from 'react-redux'
import { clearCart} from '../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'
import CartItem from '../components/molecule/Cart/CartItem'
import CheckoutNavbar from '../components/organism/Navbar/CheckoutNavbar'
import EmptyCart from '../components/molecule/Cart/EmptyCart'
import CustomButton from '../components/Atoms/WithCVA/CustomButton'


const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    const formattedTotalPrice = totalPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })
    return {formattedTotalPrice, totalQuantity}
  }

  const handleCart = async () => {
    setCheckoutLoading(true);
  
    try {
      // Transform the cartItems in the expected format
      const formattedCartItems = cartItems.map((item) => ({
        id_product: item.id,
        id_customer: item.id,
        qty: item.quantity,
        price: item.price,
      }));
  
      // Make an API request to initiate the checkout process
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems: formattedCartItems }),
        // Add any necessary authentication headers if required
      });
  
      if (response.ok) {
        // If checkout is successful, clear the local cart
        clearCart();
        alert('Checkout successful!');
      } else {
        // Handle errors or show appropriate messages
        alert('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error.message);
      // Handle errors or show appropriate messages
      alert('An error occurred during checkout. Please try again.');
    } finally {
      setCheckoutLoading(false);
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
        <div className='p-[40px] bg-gray-100 text-gray-400'>
          <p>Saat Anda menandatangani tanda terima pemesanan produk, Anda dianggap telah menerima dan memeriksa secara teliti produk tersebut. Oleh karena itu, Anda tidak berhak melakukan pembatalan dan/atau pengembalian produk tersebut.</p>
        </div>
      <div className="flex justify-between items-center">
        <div className='flex items-center gap-1'>
    <CustomButton onClick={() => {dispatch(clearCart())}} text="Hapus" intent="accent_nobg"/>
    </div>
    <div className='flex items-center gap-4'>
    <p className="total__p">
  total ({getTotal().totalQuantity} items)
  : <strong>Rp {getTotal().formattedTotalPrice}</strong>
</p>
    <CustomButton to="/checkout" text="Bayar" intent="accent_bg"/></div>
  </div></div>
    ) : (
       <EmptyCart/>
    )
  }
</div>
  )
}

export default Cart