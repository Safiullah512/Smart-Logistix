function ActiveVehicles() {
  return (
    <div className="w-186 bg-white rounded shadow-[0_0_3px_rgba(0,0,0,0.3)] p-5 mt-3">
      <h1 className="font-bold mb-3">Active Vehicles</h1>
      <div className=" grid grid-cols-[1.2fr_1fr_1fr_2fr_0.8fr_1fr] *:p-2 text-sm border border-slate-200 rounded">
        <p className="bg-slate-200 font-bold">Vehicle No.</p>
        <p className="bg-slate-200 font-bold ">Driver</p>
        <p className="bg-slate-200 font-bold ">Status</p>
        <p className="bg-slate-200 font-bold ">Location</p>
        <p className="bg-slate-200 font-bold ">Speed</p>
        <p className="bg-slate-200 font-bold ">Last Update</p>

        <p className="font-bold">DL 1LA 1234</p>
        <p>Rohit Sharma</p>
        <span>
          <p className="bg-green-200 text-green-600 p-1 text-center rounded">
            In Transit
          </p>
        </span>
        <p>Connaught Place, Delhi</p>
        <p>45 km/h</p>
        <p>2 min ago</p>

        <p className="font-bold">HR 26 AB 5678</p>
        <p>Vikram Yadav</p>
        <span>
          <p className="bg-green-200 text-green-600 p-1 text-center rounded">
            In Transit
          </p>
        </span>
        <p>India Gate, Delhi</p>
        <p>38 km/h</p>
        <p>1 min ago</p>

        <p className="font-bold">UP 14 XY 9876</p>
        <p>Arjun Patel</p>
        <span>
          <p className="bg-red-200 text-red-600 p-1 text-center rounded">
            Stopped
          </p>
        </span>
        <p>Noida Sector 18</p>
        <p>0 km/h</p>
        <p>5 min ago</p>

        <p className="font-bold">DL 1GC 4321</p>
        <p>Manish Verma</p>
        <span>
          <p className="bg-green-200 text-green-600 p-1 text-center rounded">
            Idle
          </p>
        </span>
        <p>Gurugram, Haryana</p>
        <p>0 km/h</p>
        <p>10 min ago</p>
      </div>
    </div>
  );
}
export default ActiveVehicles;
