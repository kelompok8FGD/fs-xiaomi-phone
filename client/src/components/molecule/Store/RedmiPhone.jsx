import ProductCard from './ProductCard';

const RedmiPhone = () => {
  const products = [
    {
      productName: 'Redmi A1',
      imageSrc: '/redmiphone/redmia1.png',
      imageAlt: 'Redmi A1 Image',
      discount: 13,
      currency: 'Rp',
      price: '999.000',
      originalPrice: '1.149.000',
    },
    {
      productName: 'Redmi A2',
      imageSrc: '/redmiphone/redmia-2.png',
      imageAlt: 'Redmi A2 Image',
      currency: 'Rp',
      price: '949.000',
    },
    {
      productName: 'Redmi Note 11',
      imageSrc: '/redmiphone/redminote11.png',
      imageAlt: 'Redmi Note 11 Image',
      discount: 7,
      currency: 'Rp',
      price: '2.399.000',
      originalPrice: '2.599.000',
    },
    {
      productName: 'Redmi Note 11 Pro',
      imageSrc: '/redmiphone/redminote11pro.png',
      imageAlt: 'Redmi Note 11 Pro',
      discount: 5,
      currency: 'Rp',
      price: '3.399.000',
      originalPrice: '3.599.000',
    },
    {
      productName: 'Redmi Note 11 Pro 5G',
      imageSrc: '/redmiphone/redminote11pro5g.png',
      imageAlt: 'Redmi Note 11 Pro 5G',
      discount: 4,
      currency: 'Rp',
      price: '4.099.000',
      originalPrice: '4.299.000',
    },
    {
      productName: 'Redmi 10A',
      imageSrc: '/redmiphone/redmi10a.png',
      imageAlt: 'Redmi 10 A',
      discount: 26,
      currency: 'Rp',
      price: '1.099.000',
      originalPrice: '1.499.000',
    },
    {
      productName: 'Redmi 10C',
      imageSrc: '/redmiphone/redmi10c.png',
      imageAlt: 'Redmi 10C',
      discount: 26,
      currency: 'Rp',
      price: '1.399.000',
      originalPrice: '1.899.000',
    },
    {
      productName: 'Redmi 12C',
      imageSrc: '/redmiphone/redmi-12c.png',
      imageAlt: 'Redmi 12C',
      discount: 14,
      currency: 'Rp',
      price: '1.199.000',
      originalPrice: '1.399.000',
    },
    {
      productName: 'Redmi 10 2022',
      imageSrc: '/redmiphone/redmi102022.png',
      imageAlt: 'Redmi 10 2022',
      discount: 18,
      currency: 'Rp',
      price: '1.799.000',
      originalPrice: '2.199.000',
    },
    {
      productName: 'Redmi 9C',
      imageSrc: '/redmiphone/redmi9c.png',
      imageAlt: 'Redmi 9C',
      discount: 15,
      currency: 'Rp',
      price: '1.349.000',
      originalPrice: '1.599.000',
    },
    {
      productName: 'Redmi 10 5G',
      imageSrc: '/redmiphone/redmi105g.png',
      imageAlt: 'Redmi 10 5G',
      discount: 36,
      currency: 'Rp',
      price: '1.899.000',
      originalPrice: '2.999.000',
    },
  ];

  return (
    <div className='w-full px-4 py-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
      {products.map((product, index) => (
        <ProductCard key={index} productData={product} />
      ))}
    </div>
  );
};


export default RedmiPhone;