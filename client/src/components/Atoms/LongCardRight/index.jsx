import {useEffect, useState, useContext} from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/cart/cartSlice";
import axios from "axios";
import {CartContext} from "../../../context/CartProvider";
import CustomButton from "../Buttons/CustomButton.jsx";
import LearnMoreButton from "../Buttons/LearnMoreButton.jsx";
import ProductImgFlagship from "../../Atoms/InsideCard/productImgFlagship.jsx";
import ProductTitleSmartphone from "../InsideCard/ProductTitleSmartphone.jsx";

const LongCardRight = (props) => {
    const [dataRedmi, setDataRedmi] = useState([]);
    const [currentPage] = useState(12);
    const [postsPerPage] = useState(13);

    const dispatch = useDispatch();
    // const { addToCart } = useContext(CartContext);

    const getApiRedmi = async () => {
        const response = await axios("https://xiaomi-phone-api.onrender.com/api/v1/products");

        setDataRedmi(response.data);
    };

    useEffect(() => {
        getApiRedmi();
    }, []);

    const productRedmi = dataRedmi.data || [];
    const currentBannerImg = productRedmi.slice(currentPage, postsPerPage); //
    const {
        Title,
        Title2,
        Title3 = " ",
        Specs,
        StartingPrice,
        PreviousPrice,
        PhonePicMobile,
        PhonePicDesktop,
        classname,
    } = props;
    return (
        <>
            <section className="flex flex-col mt-[9px] md:mt-0 md:mb-3 md:hover:cursor-pointer">
                {currentBannerImg.map((redmi) => (
                    <>
                        <div className="flex flex-col items-center relative z-20 ">
                            <div className="absolute text-center pt-10 md:text-start md:start-[20%] md:top-[70px] md:w-[550px]">
                                <ProductTitleSmartphone
                                    Title={redmi.name_product}
                                    Specs={redmi.specification}
                                    StartingPrice={redmi.price}
                                    PreviousPrice={
                                        redmi.price - redmi.price * (redmi.discount / 100)
                                    }
                                    PhonePic={redmi.image}
                                    Button="md:my-[14px] md:flex md:gap-1"
                                    Discount={redmi.discount}
                                    className="pb-5"
                                    Status="Habis"
                                />
                                <button className="bg-[#191919] hover:bg-[#444444] text-white rounded-lg p-2 px-5 md:p-0 text-[12px] font-normal leading-[14px] md:text-[24px] md:leading-[29px]">
                                    <CustomButton
                                        
                                        text="Beli Sekarang"
                                        // intent="dark"
                                        rounded="yes"
                                        hover="bg_soft"
                                        onClick={() =>
                                            dispatch(
                                                addToCart({
                                                    id: redmi.id_product,
                                                    name: redmi.name_product,
                                                    image: redmi.image,
                                                    price: redmi.price,
                                                })
                                            )
                                        }
                                    />
                                </button>
                                <button className="border border-black p-2 px-5 rounded-lg text-[12px] font-normal leading-[14px] md:text-[24px] md:leading-[29px] md:border-none md:hover:underline">
                                    <LearnMoreButton
                                        // id={xiaomi.id}
                                        text="Learn More >"
                                        intent="dark_nobg"
                                        rounded="yes"
                                        border="no"
                                        icon="text_first"
                                        hover="underline"
                                    />
                                </button>
                            </div>
                        </div>
                    </>
                ))}
                <picture className="w-full h-[460px] relative overflow-hidden md:py-12">
                    <source media="(min-width: 768px)" srcSet={`${PhonePicDesktop}`} />
                    <img
                        src={`${PhonePicMobile}`}
                        alt="phone4"
                        className="absolute inset-0 object-cover w-full h-full z-10"
                    />
                </picture>
            </section>
        </>
    );
};

export default LongCardRight;
