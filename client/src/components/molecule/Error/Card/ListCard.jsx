import CardError from "../../../Atoms/CardError";
import { useEffect, useState } from "react";
import axios from "axios";

const ListCard = () => {
  const [products, setProducts] = useState([]);

  const getApiProducts = async () => {
    const response = await axios(
      "https://6555a21884b36e3a431e0535.mockapi.io/errorProduct"
    );

    setProducts(response.data);
  };

  useEffect(() => {
    getApiProducts();
  }, []);

  return (
    <section
      id="product_card"
      className="grid grid-cols-2 m-8 p-4 items-center text-center font-inter sm:grid-cols-3 md:grid-cols-5"
    >
      {products.map((product) => (
        <div key={product.id} className="md:hover:cursor-pointer">
          <CardError
            PhonePic={product.image}
            Title={product.name}
            StartingPrice={product.price}
            // PreviousPrice={product.before_discount}
          ></CardError>
        </div>
      ))}
    </section>
  );
};

export default ListCard;
