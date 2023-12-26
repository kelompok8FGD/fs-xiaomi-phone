/* eslint react/prop-types: 0 */
import LabelStore from "../../Atoms/LabelStore/LabelStore";


const DiscountBadge = ({ discountText }) => (
    <ul className="flex">
        <li className="border-[1px] border-orange-400 bg-orange-300 bg-opacity-30 rounded text-orange-400">
            <LabelStore text={discountText} />
        </li>
    </ul>
);

export default DiscountBadge;