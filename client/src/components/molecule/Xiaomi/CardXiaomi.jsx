import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartProvider.jsx";
import CustomButton from "../../Atoms/WithCVA/CustomButton.jsx";
import TitleCard from "../../Atoms/InsideCard/TitleCard.jsx";
import ImgCard from "../../Atoms/InsideCard/ImgCard.jsx";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";

const CardXiaomi = () => {
  const [dataXiaomi, setDataXiaomi] = useState([]);
  const [currentPage] = useState(0);
  const [postsPerPage] = useState(2);

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

  // const firstPostIndex = currentPage - 1; // 0 = 1 - 1
  // const lastPostIndex = postsPerPage - 6; // 2 = 8 - 6
  const currentCard = dataXiaomi.slice(currentPage, postsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-2 mt-2 mb-3 mx-2">
        {currentCard.map((xiaomi) => (
          <div
            key={xiaomi.id}
            className={`flex flex-col bg-[#ffffff] items-center md:relative font-inter pt-10 px-5 text-center gap-2 md:hover:shadow-lg md:hover:ease-out md:duration-[250ms] pb-5 `}
          >
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
                order="text_first"
                icon=">"
                intent="accent_nobg"
                hover="bg_soft"
                media="mediumDark"
                onClick={() => addToCart(xiaomi)}
              />
              <div className="toogle_icon">
                <LearnMoreButton
                  id={xiaomi.id}
                  text="Learn More"
                  icon=">"
                  order="text_first"
                  intent="dark_nobg"
                  media="mediumLight"
                />
              </div>
            </div>
            <ImgCard id={xiaomi.id} PhonePic={xiaomi.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardXiaomi;
