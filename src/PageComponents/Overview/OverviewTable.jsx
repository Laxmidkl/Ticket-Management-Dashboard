import React, { useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const OverviewTable = () => {
  const today = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const TableData = [
    {
      id: 1,
      name: "Laxmi",
      email: "laxmi@gmail.com",
      phoneNo: 9807698790,
      TicketType: "VIP Ticket",
      status: "paid",
    },
    {
      id: 2,
      name: "Aarav Sharma",
      email: "aarav@gmail.com",
      phoneNo: 9812345678,
      TicketType: "Regular Ticket",
      status: "unpaid",
    },
    {
      id: 3,
      name: "Sophia Rai",
      email: "sophia@gmail.com",
      phoneNo: 9823456789,
      TicketType: "Gold Ticket",
      status: "paid",
    },
    {
      id: 4,
      name: "Rohan Thapa",
      email: "rohan@gmail.com",
      phoneNo: 9845678901,
      TicketType: "VIP Ticket",
      status: "pending",
    },
    {
      id: 5,
      name: "Emma Wilson",
      email: "emma@gmail.com",
      phoneNo: 9856789012,
      TicketType: "Silver Ticket",
      status: "unpaid",
    },
    {
      id: 6,
      name: "Noah Singh",
      email: "noah@gmail.com",
      phoneNo: 9867890123,
      TicketType: "Regular Ticket",
      status: "pending",
    },
    {
      id: 7,
      name: "Olivia Karki",
      email: "olivia@gmail.com",
      phoneNo: 9878901234,
      TicketType: "Gold Ticket",
      status: "paid",
    },
    {
      id: 8,
      name: "Ethan Gurung",
      email: "ethan@gmail.com",
      phoneNo: 9889012345,
      TicketType: "Silver Ticket",
      status: "unpaid",
    },
    {
      id: 9,
      name: "Harish Sharma",
      email: "harish@gmail.com",
      phoneNo: 9812345678,
      TicketType: "Regular Ticket",
      status: "unpaid",
    },
    {
      id: 10,
      name: "Sarita Karki",
      email: "sarita@gmail.com",
      phoneNo: 98789038934,
      TicketType: "Gold Ticket",
      status: "pending",
    },
    {
      id: 11,
      name: "Sujan Sharma",
      email: "sujan@gmail.com",
      phoneNo: 9811122233,
      TicketType: "VIP Ticket",
      status: "paid",
    },
    {
      id: 12,
      name: "Anita KC",
      email: "anita@gmail.com",
      phoneNo: 9822233344,
      TicketType: "Regular Ticket",
      status: "pending",
    },
    {
      id: 13,
      name: "Dipesh Thapa",
      email: "dipesh@gmail.com",
      phoneNo: 9833344455,
      TicketType: "Gold Ticket",
      status: "unpaid",
    },
    {
      id: 14,
      name: "Nisha Rai",
      email: "nisha@gmail.com",
      phoneNo: 9844455566,
      TicketType: "Silver Ticket",
      status: "paid",
    },
    {
      id: 15,
      name: "Bibek Gurung",
      email: "bibek@gmail.com",
      phoneNo: 9855566677,
      TicketType: "VIP Ticket",
      status: "pending",
    },
    {
      id: 16,
      name: "Sita Magar",
      email: "sita@gmail.com",
      phoneNo: 9866677788,
      TicketType: "Regular Ticket",
      status: "paid",
    },
    {
      id: 17,
      name: "Arjun Karki",
      email: "arjun@gmail.com",
      phoneNo: 9877788899,
      TicketType: "Gold Ticket",
      status: "unpaid",
    },
    {
      id: 18,
      name: "Mina Shrestha",
      email: "mina@gmail.com",
      phoneNo: 9888899900,
      TicketType: "Silver Ticket",
      status: "pending",
    },
  ];
 
  const [search, setSearch] = useState("");

const filteredData = TableData.filter((item) =>
  `${item.id} ${item.name} ${item.TicketType}`
    .toLowerCase()
    .includes(search.toLowerCase())
);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 4;

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;

  const currentData = filteredData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="bg-white rounded-xl mt-10 font-roboto">
      <div className=" flex py-5 ml-4 gap-2 items-center justify-between ">
        <div className=" font-semibold">Buyers List</div>
         
            
        <div className="hidden md:flex items-center w-full max-w-[680px] text-[12px]  ">
          <CiSearch size={18} className="flex-shrink-0 relative left-7 " />

          <input
            type="text"
            placeholder="Search by ticket id, name or ticket type"
                value={search}

                onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-1  pl-10 outline-none  "
          />
        </div>

            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-6 py-1 mr-4 bg-white cursor-pointer text-[12px]">
              <CgCalendarDates  className="text-gray-500" />
              <span className="font-medium text-gray-700">{today}</span>
            </div>
        
      </div>
      

      {/* Table */}
      <div>
        <table className="w-[98%] border-collapse ml-2 ">
          <thead>
            <tr className="bg-[#EFF1FF] text-left text-sm text-blue-500">
              <th className=" py-3 px-3 rounded-l-lg">Ticket ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Email</th>
              <th className="py-3">Phone</th>
              <th className="py-3">Ticket Type</th>
              <th className=" py-3 rounded-r-lg">Status</th>
            </tr>
          </thead>

          <tbody>
            { currentData.length >0 ?(
                currentData.map((item, index) => (
                  <tr
                    key={index}
                    className=" border-b border-gray-200 text-[12px] text-gray-500"
                  >
                    <td className="py-3 px-6 ">{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNo}</td>
                    <td>{item.TicketType}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded-xl text-xs font-sm ${
                          item.status === "paid"
                            ? "bg-green-100 text-green-700"
                            : item.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))

            ) :(
                  <tr>
      <td colSpan="6" className="text-center py-6 text-gray-400">
        No data found
      </td>
    </tr>
            )}
        
        
          </tbody>
        </table>

        {/*pagination Button */}
        <div className="flex justify-end items-center gap-2 mt-4 mr-5 text-gray-500">
          {/* Page Info */}
          <div className="text-sm text-gray-600 px-2">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            <GrFormPrevious />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-2 py-1 text-[10px] rounded ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "border "
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewTable;
