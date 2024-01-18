import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailPoco() {
  const [dataDetail, setDataDetail] = useState({});

  const params = useParams();

  const getDetailApiPoco = async () => {
    const response = await axios(
      `https://xiaomi-phone-api.onrender.com/api/v1/products/${params.id}`
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
          </div>
        </div>
      </div>
    </>
  );
}
