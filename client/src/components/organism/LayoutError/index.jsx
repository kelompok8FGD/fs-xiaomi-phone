import BannerError from "../../Atoms/BannerError";
import Judul from "../../molecule/Error/Judul";
import ListCard from "../../molecule/Error/Card/ListCard";

const LayoutError = () => {
  return (
    <>
      <BannerError ErrorPicDesktop="/error/page-404.png" />

      <Judul />

      <ListCard />
    </>
  );
};

export default LayoutError;
