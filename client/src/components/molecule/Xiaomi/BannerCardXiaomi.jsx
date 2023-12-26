import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartProvider";
import CustomButton from "../../Atoms/WithCVA/CustomButton";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";
import ImgFlagship from "../../Atoms/InsideCard/ImgFlagship.jsx";
import TitleCard from "../../Atoms/InsideCard/TitleCard.jsx";

const BannerCardXiaomi = () => {
  const [dataXiaomi, setDataXiaomi] = useState([]);
  const [currentPage] = useState(7);
  const [postsPerPage] = useState(8);

  const { addToCart } = useContext(CartContext);

  const getApiXiaomi = async () => {
    const response = await axios(
      "https://6555a21884b36e3a431e0535.mockapi.io/xiaomi"
    );

    setDataXiaomi(response.data);
  };

  useEffect(() => {
    getApiXiaomi();
  }, []);

  const currentBannerImg = dataXiaomi.slice(currentPage, postsPerPage); // index ke 7, (sampai) index ke 8

  return (
    <>
      <div className="flex flex-col md:hover:cursor-pointer">
        {currentBannerImg.map((xiaomi) => (
          <>
            <div
              key={xiaomi.id}
              className="flex flex-col items-center relative"
            >
              <div className="absolute text-center w-[370px] pt-10 md:text-start md:right-[2%] md:top-[60px] md:w-[600px]">
                <TitleCard
                  Title={xiaomi.name}
                  Specs={xiaomi.specs}
                  StartingPrice={xiaomi.price}
                  PreviousPrice={xiaomi.before_discount}
                  PhonePic={xiaomi.image}
                  Button="md:my-[14px] md:flex md:gap-1"
                  rating={xiaomi.rating}
                  Discount={xiaomi.discountPercentage}
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
                    onClick={() => addToCart(xiaomi)}
                  />
                  <LearnMoreButton
                    id={xiaomi.id}
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
            <ImgFlagship
              PhonePicDesktop="/smartphone/1desktop.webp"
              PhonePicMobile="/smartphone/1mobile.webp"
            ></ImgFlagship>
          </>
        ))}
      </div>
    </>
  );
};

export default BannerCardXiaomi;
