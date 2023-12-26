/* eslint react/prop-types: 0 */
const CarouselImg = (props) => {
    const { CarouselImgLarge, CarouselImgSmall } = props;

    return (
        <picture className="h-auto w-auto object-cover object-center">
            <source media="(min-width: 768px)" srcSet={CarouselImgLarge} />
            <img src={CarouselImgSmall} className="h-[100%] w-[100%] object-cover object-center" alt="Banner" />
        </picture>
    )
}

export default CarouselImg