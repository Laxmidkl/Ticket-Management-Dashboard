import React from "react";
import PageHeader from "../../Component/PageHeader";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const OverviewHeader = () => {
  const boxItem = [
    {
      title: "Total Events",
      number: 550,
      percentage: "10.23%",
      text: "Since last month",
      icon: <FaArrowUpLong />,
        trend: "up",
    },

    {
      title: "Total Tickets",
      number: 35000,
      percentage: "20.50%",
      text: "Since last month",
      icon: <FaArrowUpLong />,
        trend: "up",
    },

    {
      title: "Total Revenue",
      number: 140000,
      percentage: "30.03%",
      text: "Since last month",
      icon: <FaArrowUpLong />,
        trend: "up",
    },

    {
      title: "Upcoming  Events",
      number: 150,
      percentage: "05.15%",
      text: "Since last month",
      icon: <FaArrowDownLong />,
      trend: "down",

    },
  ];
  return (
    <div>
      <div>
        <PageHeader
          title="Dashboard Overview"
          breadcrumbs={["Apps", "Dashboard"]}
        />
      </div>

      <div className=" grid grid-cols-4 gap-5 font-roboto">
        {boxItem.map((item, index) => (
          <div
            key={index}
            className=" h-36 bg-white rounded-lg shadow-md border-gray-50 border"
          >
            <div className=" ml-4 mt-4">
              <h2 className="text-[15px] font-medium text-gray-700">
                {item.title}
              </h2>

              <div className="  mt-3">
                <h1 className="text-lg font-semibold "> {item.number.toLocaleString()}</h1>
                
              </div>

              <div className="flex items-center gap-3 mt-4">
                <div className={`text-[12px]  flex gap-1 bg-green-100 px-3 py-1 rounded-xl items-center ${
                   item.trend === "down" ? "text-red-500 bg-red-100" : "text-green-500 bg-green-100"
                }`}>
                  <span className="">{item.icon}</span>
                <span className=" font-semibold">
                  {item.percentage}
                </span>
                </div>
                <span className="text-gray-400 text-[13px]">{item.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewHeader;
