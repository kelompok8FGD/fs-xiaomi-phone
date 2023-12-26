/* eslint react/prop-types: 0 */
import LabelStore from '../../Atoms/LabelStore/LabelStore';

const StatusBadge = ({ statusText, }) => (
    <ul className="flex">
        <li className={`border-[1px] border-green-400 bg-green-300 bg-opacity-30 rounded text-green-400`}>
            <LabelStore text={statusText} />
        </li>
    </ul>
);

export default StatusBadge;