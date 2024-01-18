import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import axios from "axios";
import CustomButton from "../../Atoms/WithCVA/CustomButton.jsx";
import TitleCard from "../../Atoms/InsideCard/TitleCard.jsx";
import ImgCard from "../../Atoms/InsideCard/ImgCard.jsx";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";

const CardXiaomi = () => {
  const [dataXiaomi, setDataXiaomi] = useState([]);
  const [currentPage] = useState(17);
  const [postsPerPage] = useState(19);

  const dispatch = useDispatch();
  // const API_URL = "https://6555a21884b36e3a431e0535.mockapi.io/xiaomi";
  //const API_URL = "http://localhost:5000/api/v1/products";
  const API_URL = "https://xiaomi-phone-api.onrender.com/api/v1/products";

  const getApiXiaomi = async () => {
    const response = await axios(API_URL);
    // Choose the one that matches the api
    const data = response.data; //for data from mockapi
    //const data = response.data.data // for data from localhost
    setDataXiaomi(data);
  };

  useEffect(() => {
    getApiXiaomi();
  }, []);

  // const firstPostIndex = currentPage - 1; // 0 = 1 - 1
  // const lastPostIndex = postsPerPage - 6; // 2 = 8 - 6
  // const currentCard = dataXiaomi
  //   .filter((xiaomi) => xiaomi.category_product === "XIAOMI Phone")
  //   .slice(currentPage, postsPerPage);
  const productXiaomi = dataXiaomi.data || [];
  const currentCard = productXiaomi.slice(currentPage, postsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-2 mt-2 mb-3 mx-2">
        {currentCard.map((xiaomi) => (
          <div
            key={xiaomi.id_product}
            className={`flex flex-col bg-[#ffffff] items-center md:relative font-inter pt-10 px-5 text-center gap-2 md:hover:shadow-lg md:hover:ease-out md:duration-[250ms] pb-5 `}
          >
            <TitleCard
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
              Status={xiaomi.stock === 0 ? "Habis" : "Available"}
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
              <div className="toogle_icon">
                <LearnMoreButton
                  id={xiaomi.id_product}
                  text="Learn More"
                  icon=">"
                  order="text_first"
                  intent="dark_nobg"
                  media="mediumLight"
                />
              </div>
            </div>
            <ImgCard id={xiaomi.id_product} PhonePic={xiaomi.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardXiaomi;
