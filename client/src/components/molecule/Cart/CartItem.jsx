import React from 'react'
import { incrementQuantity, decrementQuantity, removeItem} from '../../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'
import Icon from '../../Atoms/Icon'
{/*Design will be improved before the final presentation week*/}

const CartItem = ({id, name, image, price, quantity=0}) => {
    const formattedPrice = price.toLocaleString(undefined, { maximumFractionDigits: 0 })
    const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center p-10 bg-white" key={id}>
        <div className="flex flex-col lg:flex-row  gap-4 items-center w-full justify-between">
        <div className='w-[60vw] flex justify-center lg:min-w-max border-[1px] border-gray-200 p-1 rounded-md border-bg-accent'>
     <img className="max-w-[200px]" src={image} alt='item'/>
     </div>
      <div className="flex w-full gap-8 justify-between">
        <div className='lg:flex gap-4'>
        <p className="cartItem__title">{name}</p>
        <p className="text-accent">
          <small>Rp </small>
          <strong>{formattedPrice}</strong>
        </p></div> {quantity >= 2 && (
    <p className='text-red-600 block'>Max quantity: 2</p>
  )}
        <div className='flex gap-4 '>
        <div id='cart-quantity-buttons' className='flex items-center justify-end h-full max-h-10'>
        <button className='px-3'
          onClick={() =>  dispatch(decrementQuantity(id))}>
           -
        </button>
          <p className='px-6 border-x-2 border-gray-300'>{quantity}</p>
          
          <button  className='px-3'  disabled={quantity >= 2}
          onClick={() =>  dispatch(incrementQuantity(id))}>
           +
        </button>
      
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            <Icon classname="close" />
        </button></div> 
      </div>
      </div>
    </div>
    
  )
}

export default CartItem