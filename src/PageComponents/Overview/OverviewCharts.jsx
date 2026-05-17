import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  useChartHeight,
  useYAxisScale,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { PieChart, Pie, Label } from "recharts";
import { IoIosArrowDown } from "react-icons/io";

// #region Sample data
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion

const Gradient = () => {
  const scale = useYAxisScale();
  const height = useChartHeight();
  const scaledZero = scale?.(0);
  if (scaledZero == null || height == null) {
    return null;
  }
  const ratio = scaledZero / height;
  return (
    <defs>
      <linearGradient
        id="splitColor"
        x1="0"
        x2="0"
        y1="0"
        y2={height}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="green" stopOpacity={1} />
        <stop offset={`${ratio}`} stopColor="green" stopOpacity={0.1} />
        <stop offset={`${ratio}`} stopColor="red" stopOpacity={0.1} />
        <stop offset="1" stopColor="red" stopOpacity={1} />
      </linearGradient>
    </defs>
  );
};

//donoughtChart
const data1 = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

// Reusable Pie Component
const MyPie = () => {
  return (
    <Pie
      data={data1}
      dataKey="value"
      nameKey="name"
      outerRadius="80%"
      innerRadius="60%"
      isAnimationActive={false}
    />
  );
};

//for piechart circle
const items = [
  { title: "Total Events", color: "bg-[#FF8042]" },
  { title: "Pending Events", color: "bg-[#0088FE]" },
  { title: "Completed Events", color: "bg-[#00C49F]" },
  { title: "Cancelled Events", color: "bg-[#FFBB28]" },
];


const OverviewCharts = () => {
  return (
    <>
    <div className="grid grid-cols-[2.1fr_1fr] gap-5 mt-10 font-roboto">
        <div className="  h-70vh  bg-white border-gray-200 rounded-xl">
            <div className=" flex justify-between ml-4 py-5">
            <div className="  font-semibold font-roboto">Revenue Statistics</div>
            <div className=" flex gap-1 px-2 py-0.5 text-[14px] text-gray-500 border-gray-300 border rounded mr-6 "> 
                <span>Annually</span>
                <span className=" mt-1"><IoIosArrowDown /></span>

            </div>
            </div>
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "50vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 10,
          right:24,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"
         tick={{ fontSize: 12}}
        />
        <YAxis width="auto"
         tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Gradient />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#000"
          fill="url(#splitColor)"
        />
        <RechartsDevtools />
      </AreaChart>

        </div>

      {/* Pie chart */}
     <div className=" h-70vh  bg-white border-gray-200 rounded-xl ">
      <div className=" flex justify-between ml-4 py-5">
            <div className="  font-semibold font-roboto">Sales Statistics</div>
            <div className=" flex gap-1 px-2 py-0.5 text-[14px] text-gray-500 border-gray-300 border rounded mr-6 "> 
                <span>Monthly</span>
                <span className=" mt-1"><IoIosArrowDown /></span>

            </div>
            </div>

      <div
        style={{
          width: "100%",
          height: "250px",
          padding: "5px",


        }}
      >
        <PieChart
          responsive
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            aspectRatio: 1,
            marginTop: "-30px",

          }}
        >
          <MyPie />

          <Label position="center" fill="#666">
            Total Sales
          </Label>

          <RechartsDevtools />
        </PieChart>
        <div className=" grid grid-cols-2 gap-4 ml-4">
            {
                items.map((items, index) =>(
                    <div key={index} className=" flex gap-1 text-[13px]">
        <div className= {`h-3 w-3 rounded-full mt-1 ${items.color}`}></div>
        <div className=" ">{items.title}</div>

            </div>
                ))
            }
      
        </div>
      </div>
      </div>
    </div>

    <div>jhiuhiu</div>
    </>
  );
};

export default OverviewCharts;
