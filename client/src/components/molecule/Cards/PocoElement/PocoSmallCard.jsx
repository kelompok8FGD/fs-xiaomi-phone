import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cart/cartSlice.js";
import CustomButton from "../../../Atoms/Buttons/CustomButton.jsx";
import ProductTitle from "../../../Atoms/InsideCard/productTitle.jsx";
import ProductImg from "../../../Atoms/InsideCard/ProductImg.jsx";
import LearnMoreButton from "../../../Atoms/Buttons/LearnMoreButton.jsx";

export default function PocoSmallCard() {
  const [dataPoco, setDataPoco] = useState([]);
  const [currentPage, setCurrentPage] = useState(3);
  const [postsPerPage, setPostPerPage] = useState(7);
  const dispatch = useDispatch();

  const getApiPoco = async () => {
    const response = await axios(
      `${import.meta.env.VITE_APP_BASEURL}/api/v1/products/category/poco`
    );

    setDataPoco(response.data);
  };

  useEffect(() => {
    getApiPoco();
  }, []);

  const productPoco = dataPoco.data || [];
  // const firstPostIndex = currentPage + 2; // 3 = 1 + 2
  // const lastPostIndex = postsPerPage - 1; // 7 = 8 - 1
  const currentSmallCard = productPoco.slice(currentPage, postsPerPage);
  // index ke 7, (sampai) index ke 8

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
                  <ProductTitle
                    Title={poco.name_product}
                    Specs={poco.specification}
                    StartingPrice={poco.price}
                    PreviousPrice={poco.price}
                    PhonePic={poco.image}
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
                    {/* <LearnMoreButton id={poco.id} /> */}
                    <LearnMoreButton
                      id={poco.id_product}
                      text="Learn More"
                      intent="light"
                      rounded="yes"
                      border="always"
                      size="small"
                    />
                  </div>
                  <ProductImg id={poco.id_product} PhonePic={poco.image} />
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
