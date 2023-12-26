import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartProvider.jsx";
import CustomButton from "../../Atoms/WithCVA/CustomButton.jsx";
import TitleCard from "../../Atoms/InsideCard/TitleCard.jsx";
import ImgCard from "../../Atoms/InsideCard/ImgCard.jsx";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";

export default function LargeCard() {
  const [dataPoco, setDataPoco] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostPerPage] = useState(2);

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

  // const firstPostIndex = currentPage - 1; // 0 = 1 - 1
  // const lastPostIndex = postsPerPage - 6; // 2 = 8 - 6
  const currentLargCard = dataPoco.slice(currentPage, postsPerPage); // index ke 7, (sampai) index ke 8

  return (
    <>
      <div className="grid grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-2 mt-2 mb-3 mx-2">
        {currentLargCard.map((poco) => (
          <div
            key={poco.id}
            className={`flex flex-col bg-[#ffffff] items-center md:relative font-inter pt-10 px-5 text-center gap-2 md:hover:shadow-lg md:hover:ease-out md:duration-[250ms] pb-5 `}
          >
            <TitleCard
              id="1"
              Title={poco.name}
              Specs={poco.specs}
              StartingPrice={poco.price}
              PreviousPrice={poco.before_discount}
              PhonePic={poco.image}
              Button="md:my-[14px] md:flex md:gap-1"
              rating={poco.rating}
              Discount={poco.discountPercentage}
              className="pb-5"
              Status="Habis"
            />
            <div className="flex flex-row gap-2">
              <CustomButton
                to="/cart"
                text="Beli Sekarang"
                order="text_first"
                icon=">"
                intent="accent_nobg"
                hover="bg_soft"
                media="mediumDark"
                onClick={() => addToCart(poco)}
              />
              <div className="toogle_icon">
                <LearnMoreButton
                  id={poco.id}
                  text="Learn More"
                  icon=">"
                  order="text_first"
                  intent="dark_nobg"
                  media="mediumLight"
                />
              </div>
            </div>
            <ImgCard id={poco.id} PhonePic={poco.image} />
          </div>
        ))}
      </div>
      {/* Large Card End */}
    </>
  );
}
