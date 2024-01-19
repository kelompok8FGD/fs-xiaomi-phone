/* eslint-disable react/prop-types */
const LongCardRight2 = (props) => {
    const {Title, Title2, Title3 = " ", Specs, StartingPrice, PreviousPrice, PhonePicMobile, PhonePicDesktop, classname} = props;
    return (
        <>
            <section className="flex flex-col mt-[9px] md:mt-0 md:mb-3 md:hover:cursor-pointer" onClick="window.location.href = '/product/#'">
                <div className="flex flex-col items-center relative z-20 ">
                    <div className="absolute text-center pt-10 md:text-start md:start-[20%] md:top-[70px] md:w-[550px]">
                        <div className="font-inter font-bold leading-[36px] text-[30px] pb-3 md:text-[42px] md:leading-[50px]">
                            {Title}<span className="text-red-700">12</span>{Title2} <span className={`${classname}`}>{Title3}</span>
                        </div>
                        <div className="text-[16px] font-normal leading-[19px] pb-5 md:text-[28px] md:leading-[34px]">{Specs}</div>
                        <div className="flex justify-center gap-2 items-center mb-5 md:justify-start md:flex md:flex-row">
                            <div className="font-normal text-[14px] leading-[18px] md:text-[25px] md:leading-[32px]">
                                Mulai dari Rp <b className="md:text-[36px] md:leading-[45px]">{StartingPrice}</b>
                            </div>
                            <div className="font-normal text-[12px] leading-[15px] text-[#999999] line-through md:text-[25px] md:leading-[32px]">Rp {PreviousPrice}</div>
                        </div>
                        <div className="">
                            <button className="bg-[#191919] hover:bg-[#444444] text-white rounded-lg p-2 px-5 text-[12px] font-normal leading-[14px] md:text-[24px] md:leading-[29px]">
                                <a href="/product/#">Beli Sekarang</a>
                            </button>
                            <button className="border border-black p-2 px-5 rounded-lg text-[12px] font-normal leading-[14px] md:text-[24px] md:leading-[29px] md:border-none md:hover:underline">
                                Learn More <b>&gt;</b>
                            </button>
                        </div>
                    </div>
                </div>
                <picture className="w-full h-[460px] relative overflow-hidden md:py-12">
                    <source media="(min-width: 768px)" srcSet={`${PhonePicDesktop}`} />
                    <img src={`${PhonePicMobile}`} alt="phone4" className="absolute inset-0 object-cover w-full h-full z-10" />
                </picture>
            </section>
        </>
    );
};

export default LongCardRight2;
