import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice.js";
import CustomButton from "../../Atoms/Buttons/CustomButton.jsx";
import ProductTitle from "../../Atoms/InsideCard/productTitle.jsx";
import ProductImg from "../../Atoms/InsideCard/ProductImg.jsx";
import LearnMoreButton from "../../Atoms/Buttons/LearnMoreButton.jsx";

const ProductCards = ({ category, mdCols, lgCols, xlCols, gapSize = 2, additionalClass, startfromproduct, endatproduct }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const API_URL = `${import.meta.env.VITE_APP_BASEURL}/products/category/${category}`;

  const getApiData = async () => {
    const response = await axios(API_URL);
    const responseData = response.data;
    setData(responseData);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const productData = data.data || [];
  const currentItems = productData.slice(startfromproduct, endatproduct);

  return (
    <>
      <div className={`max-w-full grid grid-cols-1 md:grid-cols-${mdCols} lg:grid-cols-${lgCols} xl:grid-cols-${xlCols} items-center gap-${gapSize} mt-2 mb-3 mx-2 ${additionalClass}`}>
        {currentItems.map((product) => (
          <div
            key={product.id_product}
            className={`flex flex-col bg-[#ffffff] items-center md:relative font-inter pt-10 px-5 text-center gap-2 md:hover:shadow-lg md:hover:ease-out md:duration-[250ms] pb-5 `}
          >
            <ProductTitle
              Title={product.name_product}
              Specs={product.specification}
              StartingPrice={product.price}
              PreviousPrice={product.price - product.price * (product.discount / 100)}
              PhonePic={product.image}
              Button="md:my-[14px] md:flex md:gap-1"
              Discount={product.discount}
              className="pb-5"
              Status={product.stock === 0 ? "Habis" : "Available"}
            />
            <div className="flex flex-row gap-2">
              <CustomButton
                toastMessage="Item added to cart"
                text="Beli Sekarang"
                order="text_first"
                icon=">"
                intent="accent_nobg"
                hover="bg_soft"
                media="mediumDark"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id_product,
                      name: product.name_product,
                      image: product.image,
                      price: product.price,
                    })
                  )
                }
              />
              <div className="toogle_icon">
                <LearnMoreButton
                  id={product.id_product}
                  text="Learn More"
                  icon=">"
                  order="text_first"
                  intent="dark_nobg"
                  media="mediumLight"
                />
              </div>
            </div>
            <ProductImg id={product.id_product} PhonePic={product.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCards;

