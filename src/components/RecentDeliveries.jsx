function RecentDeliveries() {
  return (
    <div className="bg-white p-5 rounded shadow-[0_0_3px_rgba(0,0,0,0.2)] ">
      <div className="w-full flex justify-between">
        <h1 className="font-bold">Recent Deliveries</h1>
        <p className="text-sm text-blue-600 font-bold">View All</p>
      </div>
      <div className="flex gap-4 justify-between text-sm mt-2 items-center border-b border-slate-200 py-2">
        <div className="flex gap-5">
          <h2 className="font-bold">#D1245</h2>
          <p>Connaught Place, Delhi</p>
        </div>
        <p className="text-blue-700 bg-blue-200 px-2 py-1 rounded ">
          In Transit
        </p>
      </div>
      <div className="flex gap-4 justify-between text-sm mt-2 items-center border-b border-slate-200 py-2">
        <div className="flex gap-5">
          <h2 className="font-bold">#D1245</h2>
          <p>Gurugram, Haryana </p>
        </div>
        <p className="text-green-700 bg-green-200 px-2 py-1 rounded ">
          Completed
        </p>
      </div>
      <div className="flex gap-4 justify-between text-sm mt-2 items-center border-b border-slate-200 py-2">
        <div className="flex gap-5">
          <h2 className="font-bold">#D1245</h2>
          <p>Noida, Uttar Pradesh</p>
        </div>
        <p className="text-orange-700 bg-orange-200 px-2 py-1 rounded ">
          Pending
        </p>
      </div>
      <div className="flex gap-4 justify-between text-sm mt-2 items-center border-b border-slate-200 py-2">
        <div className="flex gap-5">
          <h2 className="font-bold">#D1241</h2>
          <p>Faridabad, Haryana</p>
        </div>
        <p className="text-green-700 bg-green-200 px-2 py-1 rounded ">
          Completed
        </p>
      </div>
      <div className="flex gap-4 justify-between text-sm mt-2 items-center border-b border-slate-200 py-2">
        <div className="flex gap-5">
          <h2 className="font-bold">#D1241</h2>
          <p>Ghaziabad, Uttar Pradesh</p>
        </div>
        <p className="text-blue-700 bg-blue-200 px-2 py-1 rounded ">
          In Transit
        </p>
      </div>
    </div>
  );
}
export default RecentDeliveries;
