import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cart/cartSlice.js";
import CustomButton from "../../../Atoms/Buttons/CustomButton.jsx";
import ProductTitle from "../../../Atoms/InsideCard/productTitle.jsx";
import ProductImg from "../../../Atoms/InsideCard/ProductImg.jsx";
import LearnMoreButton from "../../../Atoms/Buttons/LearnMoreButton.jsx";

export default function PocoLargeCard() {
  const [dataPoco, setDataPoco] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostPerPage] = useState(2);
  const dispatch = useDispatch();

  const getApiPoco = async () => {
    const response = await axios(
      `${import.meta.env.VITE_APP_BASEURL}/products/category/poco`
    );

    setDataPoco(response.data);
  };

  useEffect(() => {
    getApiPoco();
  }, []);

  const productPoco = dataPoco.data || []; // cek apakah properti data ada
  const currentLargeCard = productPoco.slice(
    currentPage,
    currentPage + postsPerPage
  );

  // const firstPostIndex = currentPage - 1; // 0 = 1 - 1
  // const lastPostIndex = postsPerPage - 6; // 2 = 8 - 6
  // const currentLargCard = dataPoco.data.slice(currentPage, postsPerPage); // index ke 7, (sampai) index ke 8

  return (
    <>
      <div className="grid grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-2 mt-2 mb-3 mx-2">
        {currentLargeCard.map((poco) => (
          <div
            key={poco.id_product}
            className={`flex flex-col bg-[#ffffff] items-center md:relative font-inter pt-10 px-5 text-center gap-2 md:hover:shadow-lg md:hover:ease-out md:duration-[250ms] pb-5 `}
          >
            <ProductTitle
              id="1"
              Title={poco.name_product}
              Specs={poco.specification}
              StartingPrice={poco.price}
              PreviousPrice={poco.price}
              PhonePic={poco.image}
              Button="md:my-[14px] md:flex md:gap-1"
              Discount={poco.discount}
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
              <div className="toogle_icon">
                <LearnMoreButton
                  id={poco.id_product}
                  text="Learn More"
                  icon=">"
                  order="text_first"
                  intent="dark_nobg"
                  media="mediumLight"
                />
              </div>
            </div>
            <ProductImg id={poco.id_product} PhonePic={poco.image} />
          </div>
        ))}
      </div>
      {/* Large Card End */}
    </>
  );
}
