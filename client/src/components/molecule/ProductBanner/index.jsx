import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice.js";
import axios from "axios";
import CustomButton from "../../../components/Atoms/Buttons/CustomButton.jsx";
import LearnMoreButton from "../../../components/Atoms/Buttons/LearnMoreButton.jsx";
import ProductImgFlagship from "../../../components/Atoms/InsideCard/productImgFlagship.jsx";
import ProductTitle from "../../..//components/Atoms/InsideCard/productTitle.jsx";

const ProductBanner = ({ baseURL = "http://localhost:5000", category = "poco", id = 1, phonePicMobile, phonePicDesktop }) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const apiurl = `${baseURL}/api/v1/products/category/${category}/${id}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiurl);
        setProduct(response.data.data || null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setProduct(null);
      }
    };

    fetchData();
  }, [baseURL, category, id]);

  if (!product) {
    return null; // Return null or a loading indicator while data is being fetched
  }

  return (
    <div className="flex flex-col md:hover:cursor-pointer">
      <div className="flex flex-col items-center relative" key={product.id_product}>
        <div className="absolute text-center w-[370px] pt-10 md:text-start md:right-[2%] md:top-[60px] md:w-[600px]">
          <ProductTitle
            Title={product.name_product}
            Specs={product.specification}
            StartingPrice={product.price}
            PreviousPrice={product.price - product.price * (product.discount / 100)}
            PhonePic={product.image}
            Button="md:my-[14px] md:flex md:gap-1"
            Discount={product.discount}
            className="pb-5"
            Status="Habis"
          />

          <div className="flex flex-row gap-2">
            <CustomButton
              to="/cart"
              text="Beli Sekarang"
              intent="dark"
              rounded="yes"
              hover="bg_soft"
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
            <LearnMoreButton
              id={product.id_product}
              text="Learn More >"
              intent="dark_nobg"
              rounded="yes"
              border="no"
              icon="text_first"
              hover="underline"
            />
          </div>
        </div>
      </div>
      <ProductImgFlagship
        PhonePicDesktop={phonePicDesktop}
        PhonePicMobile={phonePicMobile}
      />
    </div>
  );
};

export default ProductBanner;
