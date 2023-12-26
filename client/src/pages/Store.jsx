import StoreTagline from "../components/molecule/Store/StoreTagline"
import StoreBanner from "../components/molecule/Store//StoreBanner";
import StoreCarousel from "../components/molecule/Store//StoreCarousel";
import XiaomiPhone from "../components/molecule/Store//XiaomiPhone";
import RedmiPhone from "../components/molecule/Store//RedmiPhone";
import PocoPhone from "../components/molecule/Store//PocoPhone";
import StoreLabel from "../components/Atoms/StoreLabel/StoreLabel";


const StoreSection = () => {
  return (

    <section>
      <div>
        <StoreCarousel />
      </div>
      <div>
        <StoreBanner />
      </div>
      <div>
        <StoreTagline />
      </div>
      <div>
        <StoreLabel Label='Xiaomi' />
        <XiaomiPhone />
      </div>
      <div>
        <StoreLabel Label='Redmi' />
        <RedmiPhone />
      </div>
      <div>
        <StoreLabel Label='POCO' />
        <PocoPhone />
      </div>
    </section>

  );
};

export default StoreSection