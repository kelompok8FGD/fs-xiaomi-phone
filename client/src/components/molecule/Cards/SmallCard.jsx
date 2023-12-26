import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartProvider.jsx";
import CustomButton from "../../Atoms/WithCVA/CustomButton.jsx";
import TitleCard from "../../Atoms/InsideCard/TitleCard.jsx";
import ImgCard from "../../Atoms/InsideCard/ImgCard.jsx";
import LearnMoreButton from "../../Atoms/WithCVA/LearnMoreButton.jsx";

export default function SmallCard() {
  const [dataPoco, setDataPoco] = useState([]);
  const [currentPage, setCurrentPage] = useState(3);
  const [postsPerPage, setPostPerPage] = useState(7);

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

  // const firstPostIndex = currentPage + 2; // 3 = 1 + 2
  // const lastPostIndex = postsPerPage - 1; // 7 = 8 - 1
  const currentSmallCard = dataPoco.slice(currentPage, postsPerPage); // index ke 7, (sampai) index ke 8

  return (
    <>
      {/* Small Card Start */}
      <div className="grid grid-cols-2 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-2 mt-2 md:mt-0 mx-2 mb-3">
        {currentSmallCard.length > 0 ? (
          <>
            {currentSmallCard.map((poco, i) => {
              return (
                <div
                  key={i}
                  className={`flex flex-col bg-[#ffffff] items-center md:relative font-inter pt-10 px-5 text-center gap-2 md:hover:shadow-lg md:hover:ease-out md:duration-[250ms]`}
                >
                  <TitleCard
                    Title={poco.name}
                    Specs={poco.specs}
                    StartingPrice={poco.price}
                    PreviousPrice={poco.before_discount}
                    PhonePic={poco.image}
                    rating={poco.rating}
                    Discount={poco.discountPercentage}
                    className="p-5"
                  />
                  <div className="hidden md:flex md:flex-row md:gap-2">
                    <CustomButton
                      to="/cart"
                      text="Beli Sekarang"
                      intent="dark"
                      rounded="yes"
                      size="small"
                      hover="bg_soft"
                      onClick={() => addToCart(poco)}
                    />
                    {/* <LearnMoreButton id={poco.id} /> */}
                    <LearnMoreButton
                      id={poco.id}
                      text="Learn More"
                      intent="light"
                      rounded="yes"
                      border="always"
                      size="small"
                    />
                  </div>
                  <ImgCard id={poco.id} PhonePic={poco.image} />
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div>Tidak ada data</div>
          </>
        )}
      </div>

      {/* Small Card End */}
    </>
  );
}
