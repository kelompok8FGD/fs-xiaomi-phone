import { Carousel } from "flowbite-react";
import CarouselImg from '../../Atoms/CarouselImg/CarouselImg'
import CustomButton from '../../Atoms/Buttons/CustomButton'

function StoreCarousel() {
  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 object-fill">
      <Carousel>
        <div className="relative">
          <CarouselImg CarouselImgLarge='/Carousel/xiaomi-carousel-2.jpeg' CarouselImgSmall='/Carousel/xiaomi-carousel-2-sm.webp' />
          <div className="border-box flex flex-col left-[20%] top-[35%] absolute z-2">
            <span className="font-semibold text-slate-100 pb-1 text-2xl md:text-3xl lg:text-6xl text-center sm:text-left">
              Xiaomi 13T
            </span>
            <span className="font-base text-slate-100 text-xs md:text-lg lg:text-xl text-center sm:text-left">
              Masterpiece in sight
            </span>
            <CustomButton className="mt-5 no-arrow" to="/xiaomi" text="Beli Sekarang" intent="light" rounded="yes" />
          </div>
        </div>

        <div className="relative">
          <CarouselImg CarouselImgLarge='/Carousel/redmi-carousel.jpeg' CarouselImgSmall='/Carousel/redmi-carousel-sm.webp' />
          <div className="border-box flex flex-col left-[20%] top-[35%] absolute z-2">
            <span className="font-semibold pb-1 text-2xl md:text-3xl lg:text-6xl">
              Redmi Note&nbsp;<span className="text-[#dc2626]">12</span>
            </span>
            <span className="font-base text-sm md:text-lg lg:text-xl">
              50MP Triple Camera
            </span>
            <span className="font-base text-sm md:text-lg lg:text-xl">
              AMOLED Screen 120Hz
            </span>
            <CustomButton className="mt-5 no-arrow" to="/xiaomi" text="Beli Sekarang" intent="dark" rounded="yes" />
          </div>
        </div>

        <div className="relative">
          <CarouselImg CarouselImgLarge='/Carousel/redmi-carousel-2.webp' CarouselImgSmall='/Carousel/redmi-carousel-2-sm.webp' />
          <div className="border-box flex flex-col left-[20%] top-[35%] absolute z-2">
            <span className="font-semibold pb-1 text-2xl md:text-3xl lg:text-6xl">
              Redmi Note&nbsp;<span className="text-[#dc2626]">12&nbsp;</span><span>5G</span>
            </span>
            <span className="font-base text-sm md:text-lg lg:text-xl">
              Kamera flagship SONY IMX766
            </span>
            <span className="font-base text-sm md:text-lg lg:text-xl">
              dengan OIS
            </span>
            <CustomButton className="mt-6 no-arrow" to="/xiaomi" text="Beli Sekarang" intent="dark" rounded="yes" />
          </div>
        </div>

        <div className="relative">
          <CarouselImg CarouselImgLarge='/Carousel/xiaomi-carousel.jpeg' CarouselImgSmall='/Carousel/xiaomi-carousel-sm.webp' />
          <div className="border-box flex flex-col left-[55%] top-[35%] absolute z-2 text-center sm:center sm:text-left">
            <span className="font-semibold pb-1 text-2xl md:text-3xl lg:text-6xl">
              Xiaomi 12T 5G
            </span>
            <span className="font-base text-sm md:text-lg lg:text-xl">
              Make moments memorable
            </span>
            <CustomButton className="mt-5 no-arrow" to="/xiaomi" text="Beli Sekarang" intent="dark" rounded="yes" />
          </div>
        </div>


        <div className="relative">
          <CarouselImg CarouselImgLarge='/Carousel/poco-carousel.jpeg' CarouselImgSmall='/Carousel/poco-carousel-sm.webp' />
          <div className="border-box flex flex-col left-[20%] top-[35%] absolute z-2">
            <span className="font-semibold text-slate-100 pb-1 text-2xl md:text-3xl lg:text-6xl">
              POCO F5
            </span>
            <span className="font-base text-slate-100 text-sm md:text-lg lg:text-xl">
              Snapdragon 7+ Gen 2
            </span>
            <span className="font-base text-slate-100 text-sm md:text-lg lg:text-xl">
              RAM up to 19GB* | 19MP OIS
            </span>
            <CustomButton className="mt-5 no-arrow" to="/xiaomi" text="Beli Sekarang" intent="light" rounded="yes" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default StoreCarousel;
