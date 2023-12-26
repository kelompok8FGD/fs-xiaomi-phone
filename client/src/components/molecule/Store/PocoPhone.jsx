import ProductCard from './ProductCard';

const PocoPhone = () => {
    const products = [
        {
            productName: 'POCO X5 Pro 5G',
            imageSrc: '/poco/pocox5pro5g.png',
            imageAlt: 'POCO X5 Pro 5G',
            currency: 'Rp',
            price: '3.999.000',
        },
        {
            productName: 'POCO M5',
            imageSrc: '/poco/pocoM5.png',
            imageAlt: 'POCO M5',
            discount: 23,
            currency: 'Rp',
            price: '1.599.000',
            originalPrice: '2.099.000',
        },
        {
            productName: 'POCO C40',
            imageSrc: '/poco/pococ40.png',
            imageAlt: 'POCO C40',
            discount: 18,
            currency: 'Rp',
            price: '1.299.000',
            originalPrice: '1.599.000',
        },
        {
            productName: 'POCO F5',
            imageSrc: '/poco/pocof5.png',
            imageAlt: 'POCO 13T',
            currency: 'Rp',
            price: '6.499.000',
        },
        {
            productName: 'POCO F4',
            imageSrc: '/poco/pocof4.png',
            imageAlt: 'POCO F4',
            currency: 'Rp',
            price: '5.199.000',
        },
    ];

    return (
        <div className='w-full px-1 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
            {products.map((product, index) => (
                <ProductCard key={index} productData={product} />
            ))}
        </div>
    );
};

export default PocoPhone;