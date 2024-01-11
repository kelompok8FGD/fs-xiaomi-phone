/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartProvider.jsx";
import CustomButton from "../../Atoms/WithCVA/CustomButton.jsx";
import TitleFlagship from "../../Atoms/InsideCard/TitleFlagship.jsx";
import ImgFlagship from "../../Atoms/InsideCard/ImgFlagship.jsx";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";

export default function BannerCard() {
  const [dataPoco, setDataPoco] = useState([]);
  const [currentPage, setCurrentPage] = useState(7);
  const [postsPerPage, setPostPerPage] = useState(8);

  const { cartItems, addToCart } = useContext(CartContext);

  const getApiPoco = async () => {
    const response = await axios(
      "https://6533becde1b6f4c59046358c.mockapi.io/Poco/Product/user/"
    );

    setDataPoco(response.data);
  };

  useEffect(() => {
    getApiPoco();
  }, []);

  // const firstPostIndex = postsPerPage - 1; // 7 = 8 - 1
  // const lastPostIndex = currentPage + 1; // 8 = 7 + 1
  const currentBannerImg = dataPoco.slice(currentPage, postsPerPage); // index ke 7, (sampai) index ke 8

  return (
    <>
      <div className="flex flex-col md:hover:cursor-pointer">
        {currentBannerImg.map((poco) => (
          <>
            <div key={poco.id} className="flex flex-col items-center relative">
              <div className="absolute text-center w-[370px] pt-10 md:text-start md:left-[10%] md:top-[60px] md:w-[600px]">
                <TitleFlagship
                  Title={poco.name}
                  Specs={poco.specs}
                  CurrentPrice={poco.price}
                ></TitleFlagship>
                <div className="flex flex-row gap-2">
                  <CustomButton
                    to="/cart"
                    text="Beli Sekarang"
                    intent="light"
                    rounded="yes"
                    hover="bg_soft"
                    onClick={() => addToCart(poco)}
                  />
                  <LearnMoreButton
                    id={poco.id}
                    text="Learn More >"
                    intent="white_nobg"
                    rounded="yes"
                    border="no"
                    icon="text_first"
                    hover="underline"
                  />
                </div>
              </div>
            </div>
            <ImgFlagship
              id={poco.id}
              PhonePicDesktop={poco.imgBannerDesktop}
              PhonePicMobile={poco.imgBannerMobile}
            ></ImgFlagship>
          </>
        ))}
      </div>
    </>
  );
}
