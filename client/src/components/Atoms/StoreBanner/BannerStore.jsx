/* eslint react/prop-types: 0 */
const BannerStore = (props) => {
  const { Title, Tagline, BannerPicLarge, BannerPicSmall, Button } = props;

  return (
    <section className="relative w-full px-4 md:px-1 flex-wrap xl:w-10/12 xl:mx-auto">
      <div className="relative overflow-hidden">
        <picture className="h-[100%] w-[100%] object-cover object-center">
          <source media="(min-width: 768px)" srcSet={BannerPicLarge} />
          <img src={BannerPicSmall} className="h-[100%] w-[100%] object-cover object-center" alt="Banner" />
        </picture>
        <div className="absolute ml-5 top-1/2 transform -translate-y-1/2 text-black p-4 sm:text-left">
          <div className="font-inter text-lg md:text-xl lg:text-xl font-semibold">
            {Title}
          </div>
          <div className="text-sm md:text-md lg:text-lg font-normal mt-2">
            {Tagline}
          </div>
          <div className="mt-4">
            <button className="bg-black hover:bg-[#444444] text-white rounded-lg p-2 px-5 text-sm font-normal">
              <a href="/product/#">{Button}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStore;

