import { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import axios from "axios";
import { CartContext } from "../../../context/CartProvider";
import CustomButton from "../../Atoms/WithCVA/CustomButton";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";
import ProductImgFlagship from "../../Atoms/InsideCard/productImgFlagship.jsx";
import ProductTitle from "../../Atoms/InsideCard/productTitle.jsx";

const BannerCardXiaomi = () => {
  const [dataXiaomi, setDataXiaomi] = useState([]);
  const [currentPage] = useState(15);
  const [postsPerPage] = useState(16);

  const dispatch = useDispatch();
  // const { addToCart } = useContext(CartContext);

  const getApiXiaomi = async () => {
    const response = await axios(
      // "https://6555a21884b36e3a431e0535.mockapi.io/xiaomi"
      "https://xiaomi-phone-api.onrender.com/api/v1/products"
    );

    setDataXiaomi(response.data);
  };

  useEffect(() => {
    getApiXiaomi();
  }, []);

  const productXiaomi = dataXiaomi.data || [];
  const currentBannerImg = productXiaomi.slice(currentPage, postsPerPage); // index ke 7, (sampai) index ke 8

  return (
    <>
      <div className="flex flex-col md:hover:cursor-pointer">
        {currentBannerImg.map((xiaomi) => (
          <>
            <div
              key={xiaomi.id_product}
              className="flex flex-col items-center relative"
            >
              <div className="absolute text-center w-[370px] pt-10 md:text-start md:right-[2%] md:top-[60px] md:w-[600px]">
                <ProductTitle
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
                          id: xiaomi.id_product,
                          name: xiaomi.name_product,
                          image: xiaomi.image,
                          price: xiaomi.price,
                        })
                      )
                    }
                  />
                  <LearnMoreButton
                    id={xiaomi.id_product}
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
              PhonePicDesktop="https://firebasestorage.googleapis.com/v0/b/tutorial-1ad91.appspot.com/o/xiaomi%2Fimage_xiaomi_desktop.webp?alt=media&token=5ae3f2c0-fb04-463d-a436-54b5923bd98b"
              PhonePicMobile="https://firebasestorage.googleapis.com/v0/b/tutorial-1ad91.appspot.com/o/xiaomi%2Fimage_xiaomi_mobile.webp?alt=media&token=02825b71-48f3-4931-af50-4c5e66074513"
            ></ProductImgFlagship>
          </>
        ))}
      </div>
    </>
  );
};

export default BannerCardXiaomi;
