import { driversData } from "./DriverData";
const driversData1 = driversData[0];
console.log(driversData1.performance1);
const performanceData = [
  {
    title: driversData1.performance1,
    value: driversData1.safetyScore,
    color: "bg-green-500",
  },
  {
    title: driversData1.performance2,
    value: driversData1.timeliness,
    color: "bg-violet-500",
  },
  {
    title: driversData1.performance3,
    value: driversData1.feedbackScore,
    color: "bg-orange-500",
  },
];

export default performanceData;
