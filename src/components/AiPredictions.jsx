import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AiPredictions() {
  return (
    <div className="w-80 p-3 bg-white h-fit rounded shadow-[0_0_3px_rgba(0,0,0,0.3)]">
      <p className="font-bold text-sm mb-4">AI Prediction</p>
      <div className=" p-4 bg-violet-100 rounded-lg">
        <div className="flex gap-4 items-center text-sm font-bold">
          <div>
            <FontAwesomeIcon
              icon={faRobot}
              className="text-violet-800 text-2xl"
            ></FontAwesomeIcon>
          </div>
          <p>5 deliveries may be delayed due to high traffic in Delhi</p>
        </div>
        <button className="bg-violet-900 text-white px-5 py-1.5 text-sm rounded mt-5">
          View Details
        </button>
      </div>
    </div>
  );
}
export default AiPredictions;
