import {useContext, useEffect, useState} from "react";
import cors from "cors";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/cart/cartSlice.js";
import CustomButton from "../Buttons/CustomButton.jsx";
import ProductTitleSmartphone from "../InsideCard/ProductTitleSmartphone.jsx";
import ProductImg from "../InsideCard/ProductImg.jsx";
import LearnMoreButton from "../Buttons/LearnMoreButton.jsx";
import ProductShortCardSmartphone from "../../Atoms/InsideCard/ProductShortCardSmartphone.jsx";

const ShortCard = (props) => {
    const {styling} = props;
    const [dataXiaomi, setDataXiaomi] = useState([]);
    const [currentPage] = useState(12);
    const [postsPerPage] = useState(14);

    const dispatch = useDispatch();
    const API_URL = "https://xiaomi-phone-api.onrender.com/api/v1/products";

    const getApiXiaomi = async () => {
        const response = await axios(API_URL);
        // Choose the one that matches the api
        const data = response.data; //for data from API 
        //const data = response.data.data // for data from localhost
        setDataXiaomi(data);
    };

    useEffect(() => {
        getApiXiaomi();
    }, []);

    const productXiaomi = dataXiaomi.data || [];
    const currentSmallCard = productXiaomi.slice(currentPage, postsPerPage);

    return (
        <>
            {currentSmallCard.length > 0 ? (
                <>
                    {currentSmallCard.map((xiaomi, i) => {
                        return (
                            <div
                                key={i}
                                className={`flex flex-col bg-[#ffffff] items-center font-inter pt-[60px] md:pt-4 px-5 text-center gap-2 md:gap-0 ${styling}  md:hover:shadow-lg md:hover:ease-out md:duration-[250ms]"`}>
                                <ProductShortCardSmartphone
                                    Title={xiaomi.name_product}
                                    Specs={xiaomi.specification}
                                    StartingPrice={xiaomi.price}
                                    PreviousPrice={xiaomi.price}
                                    PhonePic={xiaomi.image}
                                    Discount={xiaomi.discountPercentage}
                                    className="p-5"
                                />
                                <div className="hidden md:flex md:flex-row md:gap-2">
                                    <CustomButton
                                        
                                        text="Beli Sekarang"
                                        intent="dark"
                                        rounded="yes"
                                        size="xsmall"
                                        hover="bg_soft"
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
                                    {/* <LearnMoreButton id={xiaomi.id} /> */}
                                    <LearnMoreButton
                                        id={xiaomi.id_product}
                                        text="Learn More"
                                        intent="light"
                                        rounded="yes"
                                        border="always"
                                        size="small"
                                    />
                                </div>
                                <ProductImg id={xiaomi.id_product} PhonePic={xiaomi.image} />
                            </div>
                        );
                    })}
                </>
            ) : (
                <>
                    <div>Tidak ada data</div>
                </>
            )}
        </>
    );
};

export default ShortCard;
