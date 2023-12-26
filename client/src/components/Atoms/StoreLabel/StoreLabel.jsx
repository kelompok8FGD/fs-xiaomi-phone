/* eslint react/prop-types: 0 */
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const StoreLabel = (props) => {
    const { Label } = props;
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="w-full p-4 ml-40 text-slate-500 font-medium">
            <h2 className="font-bold text-4xl text-slate-900 mb-5" data-aos="fade-right">{Label}</h2>
        </div>
    )

}

export default StoreLabel