import React from 'react'
import { incrementQuantity, decrementQuantity, removeItem} from '../../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'
import CustomButton from '../../Atoms/WithCVA/CustomButton'
{/*Design will be improved before the final presentation week*/}

const CartItem = ({id, name, image, price, quantity=0}) => {
    const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center p-10 bg-white" key={id}>
        {/* Previous design
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
        
        */}
        <div className="flex flex-col lg:flex-row  gap-4 items-center w-full justify-between">
        <div className='w-[60vw] lg:min-w-max border-[1px] border-gray-200 p-1 rounded-md'>
     <img className="cartItem__image" src={image} alt='item'/>
     </div>
      <div className="flex w-full gap-8 justify-between">
        <div>
        <p className="cartItem__title">{name}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p></div>
        <div className='flex gap-4'>
        <div id='cart-quantity-buttons' className='flex items-center justify-end'>
        <CustomButton  onClick={() => dispatch(decrementQuantity(id))} text="-" intent="light"></CustomButton >
          <p>{quantity}</p>
          <CustomButton  onClick={() => dispatch(incrementQuantity(id))} text="+" intent="light"></CustomButton >
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            x
        </button></div>
      </div>
      </div>
    </div>
    
  )
}

export default CartItem