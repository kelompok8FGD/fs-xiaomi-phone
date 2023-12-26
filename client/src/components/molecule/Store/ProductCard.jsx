/* eslint react/prop-types: 0 */
import StoreImage from '../../Atoms/StoreImage/StoreImage';
import DiscountBadge from './DiscountBadge';
import StatusBadge from './StatusBadge';

const ProductCard = ({ productData }) => (
  <div className="mb-12 p-4 md:w-1/2 cursor-pointer">
    <div className="rounded-md overflow-hidden hover:shadow-lg bg-slate-50 duration-300">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className=" lg:right-0">
              <StoreImage src={productData.imageSrc} alt={productData.imageAlt} />
            </div>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="block font-semibold text-primary text-xl lg:text-3xl ml-5">
              {productData.productName}
            </h1>
            {productData.discount && (
              <div className="mb-3 ml-5">
                <DiscountBadge discountText={`Discount ${productData.discount}%`} />
              </div>
            )}
            {productData.status && (
              <div className="mb-3 ml-5">
                <StatusBadge
                  statusText={productData.status.text}
                  bgColor={productData.status.bgColor}
                  textColor={productData.status.textColor}
                />
              </div>
            )}
            <p className="font-medium text-lg text-slate-700 pb-5 ml-5">
              <small className="text-base">{productData.currency}&nbsp;</small>
              {productData.price}
              {productData.originalPrice && (
                <>
                  <br />
                  <del className="text-sm line-through opacity-30">
                    {productData.currency}&nbsp;{productData.originalPrice}
                  </del>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;