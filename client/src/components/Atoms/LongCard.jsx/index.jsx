/* eslint-disable react/prop-types */
const LongCard = (props) => {
    const {Title, Specs, Discount, CurrentPrice, PreviousPrice, classname, Status, PhonePic} = props;

    return (
        <div className="md:mr-2 md:w-screen ">
            <div className="flex flex-col items-center font-inter pt-10 px-5 text-center gap-2 bg-[#ffffff] md:max-h-[492px] md:relative md:hover:shadow-lg md:hover:ease-out md:duration-[250ms]" onClick="window.location.href = '/product/#'">
                <div className="font-semibold text-[35px] leading-[44px] md:text-[36px] md:leading-[45px]">{Title}</div>
                <div className="font-normal text-[19px] leading-[24px] md:text-[18px] md:leading-[23px]">{Specs}</div>
                <div className="font-normal text-[12px] leading-[17px] text-[#ff6900] border border-[#ff6900] bg-[#FFF0E5] rounded px-1 md:left-4 md:top-4 md:absolute">{Discount}</div>
                <div className="flex gap-2 items-center">
                    <div className="font-normal text-[19px] leading-[24px] md:text-[21px] md:leading-[26px]">Mulai Dari Rp {CurrentPrice}</div>
                    <div className="font-normal text-[12px] leading-[15px] text-[#999999] line-through md:text-[15px] md:leading-[19px]">{PreviousPrice}</div>
                </div>
                <div className="font-normal text-[14px] leading-[17px] py-4 mt-3">
                    <button href="#" disabled>
                        <span className={`text-[#8998BB] font-normal text-[15px] leading-[18px] md:bg-[#D0D0D0] ${classname} md:rounded-lg md:p-2 md:px-5 md:text-[18px] md:leading-[22px]`}>
                            {Status} <span className="md:hidden">&gt;</span>
                        </span>
                    </button>
                    <a href="#">
                        <span className="font-normal text-[15px] leading-[18px] md:border md:border-black md:rounded-lg md:p-2 md:px-5">
                            Learn More <span className="md:hidden">&gt;</span>
                        </span>
                    </a>
                </div>
                <picture className="md:flex md:items-center md:justify-center md:mt-0">
                    <img src={`${PhonePic}`} alt="phone2" className="h-[226px] w-[226px] md:h-[260px] md:w-[260px]" />
                </picture>
            </div>
        </div>
    );
};

export default LongCard;
