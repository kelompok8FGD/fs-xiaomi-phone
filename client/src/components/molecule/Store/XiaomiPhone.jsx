import ProductCard from './ProductCard';

const XiaomiPhone = () => {
  const products = [
    {
      productName: 'Xiaomi 13T',
      imageSrc: '/xiaomiphone/xiaomi13t.png',
      imageAlt: 'Xiaomi 13 T',
      status: { text: 'New' },
      currency: 'Rp',
      price: '6.499.000',
    },
    {
      productName: 'Xiaomi 12T 5G',
      imageSrc: '/xiaomiphone/xiaomi12t5g.png',
      imageAlt: 'Xiaomi 12 T 5G',
      currency: 'Rp',
      price: '6.599.000',
    },
    {
      productName: 'Xiaomi 12 Pro',
      imageSrc: '/xiaomiphone/xiaomi12pro.png',
      imageAlt: 'Xiaomi 12 Pro',
      currency: 'Rp',
      price: '12.999.000',
    },
  ];

  return (
    <div className='relative w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
      {products.map((product, index) => (
        <ProductCard key={index} productData={product} />
      ))}
    </div>
  );
};

export default XiaomiPhone;