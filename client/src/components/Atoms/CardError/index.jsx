import { Link } from "react-router-dom";

const CardError = (props) => {
  const { PhonePic, Title, Specs, StartingPrice, PreviousPrice, id } = props;
  const formattedPrice = StartingPrice.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
  return (
    <div>
      <div
        className={`col-row-2 bg-[white] rounded-xl m-3 sm:col-row-3 md:col-row-5`}
      >
        <div className="p-8">
          <picture className="mt-5 ml-[150px] sm:ml-[10px] lg:ml-[65px]">
            <Link to={`/smartphone`}>
              <img
                src={`${PhonePic}`}
                alt="phone3b"
                className="h-[144px] w-[144px] md:h-[260px] md:w-[260px]"
              />
            </Link>
          </picture>
          <div className="text-lg font-normal">{Title}</div>
          <div className="text-[28px] font-normal sm:text-[18px]">{Specs}</div>
          <div className="flex gap-2 flex-col md:flex md:flex-row md:items-center">
            <div className="text-sm mb-8 text-amber-600">
              Mulai dari Rp {formattedPrice}
            </div>
            <div className="text-lg mb-8 text-amber-600 line-through">
              {PreviousPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardError;
