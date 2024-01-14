/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import CustomButton from "../../Atoms/WithCVA/CustomButton.jsx";
import TitleFlagship from "../../Atoms/InsideCard/TitleFlagship.jsx";
import ImgFlagship from "../../Atoms/InsideCard/ImgFlagship.jsx";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";

export default function BannerCard() {
  const [dataPoco, setDataPoco] = useState([]);
  const [currentPage, setCurrentPage] = useState(7);
  const [postsPerPage, setPostPerPage] = useState(8);

  const dispatch = useDispatch();

  const getApiPoco = async () => {
    const response = await axios(
      "https://xiaomi-phone-api.onrender.com/api/v1/products"
    );

    setDataPoco(response.data);
  };

  useEffect(() => {
    getApiPoco();
  }, []);
  const productPoco = dataPoco.data || [];
  console.log(productPoco);

  // const firstPostIndex = postsPerPage - 1; // 7 = 8 - 1
  // const lastPostIndex = currentPage + 1; // 8 = 7 + 1
  const currentBannerImg = productPoco.slice(
    currentPage,
    currentPage + postsPerPage
  ); // index ke 7, (sampai) index ke 8

  return (
    <>
      <div className="flex flex-col md:hover:cursor-pointer">
        {currentBannerImg.map((poco) => (
          <>
            <div
              key={poco.id_product}
              className="flex flex-col items-center relative"
            >
              <div className="absolute text-center w-[370px] pt-10 md:text-start md:left-[10%] md:top-[60px] md:w-[600px]">
                <TitleFlagship
                  Title={poco.name_product}
                  Specs={poco.specification}
                  CurrentPrice={poco.price}
                ></TitleFlagship>
                <div className="flex flex-row gap-2">
                  <CustomButton
                    to="/cart"
                    text="Beli Sekarang"
                    intent="light"
                    rounded="yes"
                    hover="bg_soft"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: poco.id_product,
                          name: poco.name_product,
                          image: poco.image,
                          price: poco.price,
                        })
                      )
                    }
                  />
                  <LearnMoreButton
                    id={poco.id_product}
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
              id={poco.id_product}
              PhonePicDesktop="https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/poco_f5%2Fbanner_poco_F5_panjang_desktop.jpg?alt=media&token=54a466d1-7760-40c2-ac1d-253a983e3eb4"
              PhonePicMobile="https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/poco_f5%2Fbanner_poco_F5_panjang_mobile.jpg?alt=media&token=d09ec3e7-209b-44d9-8547-6c17198d4131"
            ></ImgFlagship>
          </>
        ))}
      </div>
    </>
  );
}
