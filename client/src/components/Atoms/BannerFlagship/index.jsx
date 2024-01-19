import {useEffect, useState, useContext} from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/cart/cartSlice";
import axios from "axios";
import {CartContext} from "../../../context/CartProvider";
import CustomButton from "../../Atoms/WithCVA/CustomButton";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";
import ProductImgFlagship from "../../Atoms/InsideCard/productImgFlagship.jsx";
import ProductTitleSmartphone from "../InsideCard/ProductTitleSmartphone.jsx";

const BannerFlagship = (props) => {
  const [dataXiaomi, setDataXiaomi] = useState([]);
  const [currentPage] = useState(15);
  const [postsPerPage] = useState(16);

  const dispatch = useDispatch();
  // const { addToCart } = useContext(CartContext);

  const getApiXiaomi = async () => {
    const response = await axios(
      "https://xiaomi-phone-api.onrender.com/api/v1/products"
    );

    setDataXiaomi(response.data);
  };

  useEffect(() => {
    getApiXiaomi();
  }, []);

  const productXiaomi = dataXiaomi.data || [];
  const currentBannerImg = productXiaomi.slice(currentPage, postsPerPage); //

  const {Title, Specs, StartingPrice, PreviousPrice, PhonePicDesktop, PhonePicMobile} = props;
  return (
    <>
      <div className="flex flex-col md:hover:cursor-pointer">
        {currentBannerImg.map((xiaomi) => (
          <>
            <div className="flex flex-col items-center relative">
              <div className="absolute text-center w-[370px] pt-10 md:text-start md:left-[55%] md:top-[60px] md:w-[600px]">
                <ProductTitleSmartphone
                  Title={xiaomi.name_product}
                  Specs={xiaomi.specification}
                  StartingPrice={xiaomi.price}
                  PreviousPrice={
                    xiaomi.price - xiaomi.price * (xiaomi.discount / 100)
                  }
                  PhonePic={xiaomi.image}
                  Button="md:my-[14px] md:flex md:gap-1"
                  Discount={xiaomi.discount}
                  className="pb-5"
                  Status="Habis"
                />
                <div className="mt-5 md:flex">
                  <button className="bg-[#191919] hover:bg-[#444444] text-white rounded-lg p-2 px-5 text-[12px] font-normal leading-[14px] md:text-[24px] md:leading-[29px]">
                    <CustomButton
                      to="/cart"
                      text="Beli Sekarang"
                      // intent="dark"
                      rounded="yes"
                      hover="bg_soft"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: xiaomi.id_product,
                            name: xiaomi.name_product,
                            image: xiaomi.image,
                            price: xiaomi.price,
                          })
                        )
                      }
                    />
                  </button>
                  <button className="border border-black p-2 px-5 rounded-lg text-[12px] font-normal leading-[14px] md:text-[24px] md:leading-[29px] md:border-none md:hover:underline">
                    <LearnMoreButton
                      // id={xiaomi.id}
                      text="Learn More >"
                      intent="dark_nobg"
                      rounded="yes"
                      border="no"
                      icon="text_first"
                      hover="underline"
                    />
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
        <picture className="w-full h-[460px]">
          <source media="(min-width: 768px)" srcSet={`${PhonePicDesktop}`} />
          <img
            src={`${PhonePicMobile}`}
            alt="phone1"
            className="inset-0 object-cover w-full h-full"
          />
        </picture>
      </div>
    </>
  );
};

export default BannerFlagship;
