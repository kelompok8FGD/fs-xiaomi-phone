import BannerSeeAll from "../../Atoms/BannerSeeAll";
import LongCardRight from "../../Atoms/LongCardRight";

const RedmiSection = () => {
    return (
        <>
            <BannerSeeAll SeriesName="Seri Redmi" Motto="Hape Jawara" redirect="/Redmi"/>
            <LongCardRight Title="Redmi Note" Specs="50 Triple Kamera | Layar AMOLED 120Hz" StartingPrice="2.099.000" PreviousPrice="6.599.000" PhonePicMobile="https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/4mobile.webp?alt=media&token=a2b79ce7-c004-489c-84a1-ed322c811989" PhonePicDesktop="https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/2desktop.webp?alt=media&token=fb093076-c032-44bd-ba3b-4bb846ec685c"></LongCardRight>
            <LongCardRight Title="Redmi Note" Title2=" Pro" StartingPrice="2.099.000" PreviousPrice="6.599.000" PhonePicMobile="https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/5mobile.webp?alt=media&token=9cfe2218-1c7d-4fad-9067-816375774306" PhonePicDesktop="https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/3desktop.webp?alt=media&token=93a53015-7323-40f6-97a3-e5737fa52e63"></LongCardRight>
            <LongCardRight Title="Redmi Note" Title2=" Pro" Title3="5G" classname="border-2 border-black rounded-lg px-2" StartingPrice="2.099.000" PreviousPrice="6.599.000" PhonePicMobile="https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/6mobile.webp?alt=media&token=5092c4dc-6d93-4f7e-a553-07024032b19e" PhonePicDesktop="https://firebasestorage.googleapis.com/v0/b/fs-xiaomi.appspot.com/o/4desktop.webp?alt=media&token=65f38ab0-4626-44ea-abfe-2b972f5d401e"></LongCardRight>
        </>
    );
};

export default RedmiSection;
