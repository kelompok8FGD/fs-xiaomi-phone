import React from 'react';

const OrderInvoice = ({ id }) => {
  return (
    <div className='h-[100vh] w-full bg-background p-8' id={id}>
      <h1 className='text-3xl font-bold mb-4'>Order Invoice - Xiaomi</h1>
      <div className='bg-white p-6 rounded-md shadow-md'>
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Order Details</h2>
          <p>Order Number: #123456</p>
          <p>Date: January 26, 2024</p>
        </div>
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Customer Information</h2>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Address: 123 Main Street, Cityville</p>
        </div>
        <div>
          <h2 className='text-xl font-semibold'>Product Details</h2>
          <ul>
            <li> Redmi Note 13 - $299</li>
            <li> Redmi A1 - $149</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderInvoice;
