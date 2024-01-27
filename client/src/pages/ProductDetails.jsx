import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cart/cartSlice.js";
import axios from "axios";
import CustomButton from "../components/Atoms/Buttons/CustomButton.jsx";

export default function ProductDetail() {
  const [dataDetail, setDataDetail] = useState({});

  const params = useParams();
  const dispatch = useDispatch();

  const getDetailApiPoco = async () => {
    const response = await axios(
      `${import.meta.env.VITE_APP_BASEURL}/products/${params.id}`
    );
    setDataDetail(response.data.data);
  };

  useEffect(() => {
    getDetailApiPoco();
  }, []);

  return (
    <>
      <div className="py-10"></div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-20">
          <div className="m-auto">
            <img src={dataDetail.image} />
          </div>
          <div className="items-start">
            <h1 className="text-3xl font-semibold mb-2">
              {dataDetail.name_product}
            </h1>
            <p className="text-gray-500 mb-2">{dataDetail.specification}</p>
            <p className="text-gray-700 text-2xl mb-2">
              Mulai Dari Rp.{dataDetail.price}
            </p>
            <div className="">
              <CustomButton
                text="Beli Sekarang"
                order="text_first"
                icon=">"
                intent="accent_nobg"
                hover="bg_soft"
                media="mediumDark"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: dataDetail.id_product,
                      name: dataDetail.name_product,
                      image: dataDetail.image,
                      price: dataDetail.price,
                    })
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
