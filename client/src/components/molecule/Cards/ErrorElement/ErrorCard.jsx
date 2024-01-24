import CardError from "../../../Atoms/CardError";
import { useEffect, useState } from "react";
import axios from "axios";

const ErrorCard = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [currentPage] = useState(0);
  const [postsPerPage] = useState(20);
  const API_URL = "https://xiaomi-phone-api.onrender.com/api/v1/products";

  const getApiProducts = async () => {
    const response = await axios(API_URL);

    const data = response.data;

    setDataProduct(data);
  };

  useEffect(() => {
    getApiProducts();
  }, []);

  const productList = dataProduct.data || [];
  const currentCard = productList.slice(currentPage, postsPerPage);

  return (
    <section
      id="product_card"
      className="grid grid-cols-2 m-8 p-4 items-center text-center font-inter sm:grid-cols-3 md:grid-cols-5"
    >
      {currentCard.map((product) => (
        <div key={product.id_product} className="md:hover:cursor-pointer">
          <CardError
            PhonePic={product.image}
            Title={product.name_product}
            StartingPrice={product.price}
          ></CardError>
        </div>
      ))}
    </section>
  );
};

export default ErrorCard;
