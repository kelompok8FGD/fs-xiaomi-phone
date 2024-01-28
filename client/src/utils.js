export const calculateTotal = (cart) => {
    let totalQuantity = 0;
    let totalPrice = 0;
  
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
  
    const formattedTotalPrice = totalPrice.toLocaleString(undefined, { maximumFractionDigits: 0 });
  
    return { formattedTotalPrice, totalQuantity };
  };

  import { toast } from 'sonner';

export const handleToast = async (toastMessage) => {
  if (toastMessage) {
    toast.success(toastMessage);
  } else {
    toast.success('Success!');
  }
};