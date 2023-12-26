import React, { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import CheckoutNavbar from '../components/organism/Navbar/CheckoutNavbar'
import EmptyCart from '../components/molecule/Cart/EmptyCart'
import CustomButton from '../components/Atoms/WithCVA/CustomButton'


const Cart = () => {
 const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext) 
 return (
    <div className="flex flex-col max-w-[100vw] h-full bg-white">
     <CheckoutNavbar activeStep={1} />
  <div className="flex flex-col gap-4 pt-4 bg-gray-100">
    {cartItems.map((item) => (
      <div className="flex justify-between items-center p-10 bg-white" key={item.id}>
        <div className="flex gap-4 items-center">
          <div className='flex flex-col md:flex-row'>
            <div className='min-w-max border-[1px] border-gray-200 p-1 rounded-md'>
          <img src={item.image} alt={item.name} className="rounded-md h-24" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-medium">{item.name}</h1>
          </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div>
          <p className="text-black-600">{item.price}</p>
          </div>
          <div id='cart-quantity-buttons' className='flex items-center'>
        <CustomButton onClick={() => {addToCart(item)}} text="+" intent="light"/>
          <p>{item.quantity}</p>
        <CustomButton onClick={() => {removeFromCart(item)}} text="-" intent="light"/>
        </div>
        <h1 className="text-md text-accent font-medium"> Rp {getCartTotal()}</h1>
        </div>
      </div>
    ))}
  </div>
  {
    cartItems.length > 0 ? (
      <div>
        <div className='p-[40px] bg-gray-100 text-gray-400'>
          <p>Saat Anda menandatangani tanda terima pemesanan produk, Anda dianggap telah menerima dan memeriksa secara teliti produk tersebut. Oleh karena itu, Anda tidak berhak melakukan pembatalan dan/atau pengembalian produk tersebut.</p>
        </div>
      <div className="flex justify-between items-center">
        <div className='flex items-center gap-1'>
    <CustomButton onClick={() => {clearCart()}} text="Hapus" intent="accent_nobg"/>
    </div>
    <div className='flex items-center gap-4'>
    <h1 className="text-lg text-accent font-bold">Total: Rp {getCartTotal()}</h1>
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