import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice.js";
import axios from "axios";
import CustomButton from "../../Atoms/Buttons/CustomButton.jsx";
import LearnMoreButton from "../../Atoms/Buttons/LearnMoreButton.jsx";
import ProductImgFlagship from "../../Atoms/InsideCard/productImgFlagship.jsx";
import ProductTitle from "../../Atoms/InsideCard/productTitle.jsx";

const ProductBanner = ({ 
  baseURL = import.meta.env.VITE_APP_BASEURL, 
  category = "poco", 
  id = 1, 
  phonePicMobile, 
  phonePicDesktop, 
  alignLeft = false, 
  lightTheme = false, 
  darkTheme = false, 
  hideDiscount = false,
  hidePrices = false,
  hideLearnMore = false,
  height
}) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const apiurl = `${baseURL}/products/category/${category}/${id}`;

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

  const themeClass = lightTheme ? 'text-white' : (darkTheme ? 'dark-theme' : '');

  const productInfoClass = `absolute text-center w-[370px] pt-10 md:right-[2%] ${alignLeft ? 'md:text-start md:left-[15%]' : 'md:text-start md:right-[2%]'} md:top-[60px] md:w-[600px] ${themeClass}`;

  return (
    <div className="flex flex-col md:hover:cursor-pointer">
      <div className="flex flex-col items-center relative" key={product.id_product}>
        <div className={productInfoClass}>
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
            hideDiscount={hideDiscount} // Set hideDiscount based on your condition
            hidePrices={hidePrices}  
          />

          <div className="flex flex-row justify-center md:justify-start gap-2">
            <CustomButton
              toastMessage={"Item added to cart"}
              text="Beli Sekarang"
              intent={lightTheme ? 'light' : 'dark'}
              rounded="yes"
              hover={lightTheme ? 'bg_light_soft' : 'bg_dark_soft'}
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
            { !hideLearnMore &&
                <LearnMoreButton
              id={product.id_product}
              text="Learn More >"
              intent={lightTheme ? 'dark_nobg' : 'light_nobg'}
              rounded="yes"
              border="no"
              icon="text_first"
              hover={lightTheme ? 'underline_light' : 'underline_dark'}
            />
            }
          
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
