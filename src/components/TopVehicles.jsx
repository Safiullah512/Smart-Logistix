import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopDelivery() {
  return (
    <div className="w-80 p-5 mt-3 bg-white rounded shadow-[0_0_3px_rgba(0,0,0,0.3)] text-sm">
      <div className="flex justify-between">
        <p className="font-bold">Top Delivery Location</p>
        <button className="text-blue-600 font-bold border border-slate-400 p-1 text-xs rounded">
          This Week
        </button>
      </div>
      <div className="flex items-center gap-3 mt-1 text-xs">
        <p>
          Delhi <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Gurugram
        </p>
        <div className="w-30 h-2 bg-blue-500 rounded-full"></div>
        <p>45</p>
      </div>
      <div className="flex items-center gap-3 mt-1">
        <p>
          Delhi <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Gurugram
        </p>
        <div className="flex">
          <div className="w-20 h-2 bg-blue-500 rounded-l-full"></div>
          <div className="w-10 h-2 bg-slate-300 rounded-r-full"></div>
        </div>
        <p>45</p>
      </div>
      <div className="flex items-center gap-3 mt-1">
        <p>
          Delhi <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Gurugram
        </p>
        <div className="flex">
          <div className="w-15 h-2 bg-blue-500 rounded-l-full"></div>
          <div className="w-15 h-2 bg-slate-300 rounded-r-full"></div>
        </div>
        <p>45</p>
      </div>
      <div className="flex items-center gap-3 mt-1">
        <p>
          Delhi <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Gurugram
        </p>
        <div className="flex">
          <div className="w-10 h-2 bg-blue-500 rounded-l-full"></div>
          <div className="w-20 h-2 bg-slate-300 rounded-r-full"></div>
        </div>
        <p>45</p>
      </div>
    </div>
  );
}
export default TopDelivery;
