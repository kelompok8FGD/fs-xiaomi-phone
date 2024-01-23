import {useContext, useEffect, useState} from "react";
import cors from "cors";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/cart/cartSlice.js";
import CustomButton from "../Buttons/CustomButton.jsx";
import ProductImg from "../InsideCard/ProductImg.jsx";
import LearnMoreButton from "../Buttons/LearnMoreButton.jsx";
import ProductLongCardSmartphone from "../../Atoms/InsideCard/ProductLongCardSmartphone.jsx";

const LongCard = (props) => {
    const {styling} = props;
    const [dataXiaomi, setDataXiaomi] = useState([]);
    const [currentPage, setCurrentPage] = useState(13);
    const [postsPerPage, setPostPerPage] = useState(14);

    const dispatch = useDispatch();

    const getApiXiaomi = async () => {
        const response = await axios("https://xiaomi-phone-api.onrender.com/api/v1/products");

        setDataXiaomi(response.data);
    };

    useEffect(() => {
        getApiXiaomi();
    }, []);

    const productXiaomi = dataXiaomi.data || []; // cek apakah properti data ada
    console.log(productXiaomi);
    const currentLargeCard = productXiaomi.slice(currentPage, postsPerPage);

    return (
        <>
            <div className="md:mr-2 md:w-screen ">
                {currentLargeCard.map((xiaomi) => (
                    <div
                        className="flex flex-col items-center font-inter text-center gap-2 bg-[#ffffff] md:max-h-[492px] md:relative md:hover:shadow-lg md:hover:ease-out md:duration-[250ms]"
                        key={xiaomi.id_product}>
                        <div className="font-normal text-[14px] leading-[17px] py-4 mt-3">
                            <ProductLongCardSmartphone
                                id="1"
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
                                Status="Habis"
                            />
                            <div className="md:flex">
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
                        </div>
                        <ProductImg id={xiaomi.id_product} PhonePic={xiaomi.image} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default LongCard;
