"use client";
import Image from "next/image";
import Layout from "@/components/layout";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

const data = [
  {
    name: "10:00 PM",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "11:00 PM",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "12:00 PM",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "01:00 PM",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "02:00 PM",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "03:00 PM",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "04:00 PM",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Piedata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#FD2254", "#D0D2DA", "#00B7FE"];

export default function Home() {
  const HeaderData = [
    {
      title: "Projects",
      bg: "#FFF2E9",
      icon: "/project.svg",
      value: 3,
    },
    {
      title: "Requests",
      bg: "#EDE8FF",
      icon: "/requests.svg",
      value: 3456,
    },
    {
      title: "Users",
      bg: "#EAF9FF",
      icon: "/users.svg",
      value: 3,
    },
    {
      title: "Storage",
      bg: "#FFEBEF",
      icon: "/storage.svg",
      value: "128/500 GB",
    },
  ];

  return (
    <Layout>
      <div className="w-full gap-5 flex lg:flex-row flex-col justify-between">
        <div className="w-full lg:w-[65%]">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 bg-white py-[34px] px-[20px] rounded-[24px]">
            {HeaderData.map((data, index) => (
              <div key={index} className="">
                <div
                  className={`flex gap-2
                    ${index != 3 ? "xl:border-r border-[#ECECEE]" : ""}
                  `}
                >
                  <div
                    className={` flex justify-center items-center gap-2 w-[53px] h-[53px] rounded-lg p-3`}
                    style={{ backgroundColor: data.bg }}
                  >
                    <Image src={data.icon} width={30} height={30} />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm text-[#92959E]">{data.title}</h1>
                    <p className="text-base font-medium">{data.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full rounded-[24px] p-[20px] mt-5 bg-white">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-lg text-[#15192C] font-semibold">
                API Calls in last 6 hours
              </h1>
              <Image src="/filter.svg" width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height={250} className="mt-10">
  <LineChart
    width={500}
    height={200}
    data={data}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    {/* Grid */}
    <CartesianGrid strokeDasharray="3 3" />

    {/* X-Axis */}
    <XAxis
      dataKey="name"
      tick={{ fontSize: 12, color: "#92959E" }}
    />

    {/* Y-Axis */}
    <YAxis
      tickFormatter={(tick) => `${(tick / 1000).toFixed(1)}k`} // Display in 'k'
      tick={{ fontSize: 12, color: "#92959E" }}
    />

    {/* Tooltip */}
    <Tooltip formatter={(value) => `${(value / 1000).toFixed(1)}k`} />

    {/* Gradient definition for the area fill */}
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#7549FF" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#7549FF" stopOpacity={0} />
      </linearGradient>
    </defs>

    {/* Area for shadow effect */}
    <Area
      type="monotone"
      dataKey="uv"
      stroke="#7549FF"
      fillOpacity={1}
      fill="url(#colorUv)"
    />

    {/* Line */}
    <Line
      type="monotone"
      dataKey="uv"
      stroke="#7549FF"
      strokeWidth={2}
    />

  </LineChart>
</ResponsiveContainer>

          </div>

          <div className="grid xl:grid-cols-2  gap-5 w-full mt-5">
            <div className="w-full rounded-[24px] bg-white p-[20px]">
              <div className="w-full flex justify-between items-start">
                <div className="flex flex-col">
                  <h1 className="text-lg text-[#15192C] font-semibold">P&L</h1>
                  <p className="text-sm text-[#92959E]">
                    Total profit growth of 25%
                  </p>
                </div>

                <Image src="/filter.svg" width={20} height={20} />
              </div>

              <div className="w-full flex mt-1 justify-center items-center">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-2 items-start text-nowrap">
                    <div className="w-[7px] h-[8px] bg-[#FD2254] rounded-full" />
                    <div className="flex flex-col gap-1 -mt-2">
                      <p className="text-sm text-[#15192C]">Re-used APIs</p>
                      <p className="text-lg font-medium text-[#15192C]">36%</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="w-[7px] h-[8px] bg-[#00B7FE] rounded-full" />
                    <div className="flex flex-col gap-1 -mt-2">
                      <p className="text-sm text-[#15192C]">Webhooks</p>
                      <p className="text-lg font-medium text-[#15192C]">36%</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="w-[7px] h-[8px] bg-[#D0D2DA] rounded-full" />
                    <div className="flex flex-col gap-1 -mt-2">
                      <p className="text-sm text-[#15192C]">API Calls</p>
                      <p className="text-lg font-medium text-[#15192C]">36%</p>
                    </div>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={Piedata}
                      cx="50%"
                      cy="50%"
                      innerRadius="60%"
                      outerRadius="80%"
                      fill="#8884d8"
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {Piedata.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="w-full rounded-[24px] bg-white p-[20px]">
              <div className="w-full flex justify-between items-start mb-5">
                <div className="flex flex-col">
                  <h1 className="text-lg text-[#15192C] font-semibold">
                    Current Plan
                  </h1>
                  <p className="text-sm text-[#92959E]">
                    Information and usages of your current plan
                  </p>
                </div>

                <Image src="/filter.svg" width={20} height={20} />
              </div>
              <div className="w-full flex justify-between items-center mb-5">
                <div className="flex gap-2">
                  <div
                    className={` flex justify-center items-center gap-2 w-[53px] h-[53px] rounded-lg p-3 bg-[#F1FBFF]`}
                  >
                    <Image src={"/plan.svg"} width={30} height={30} />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm text-[#15192C]">Teams Plan</h1>
                    <p className="text-base font-medium text-[#15192C]">
                      $99/mo
                    </p>
                  </div>
                </div>
                <Image src="/arrright.svg" width={30} height={30} />
              </div>

              {/* Progress bars section */}
              <div className="">
                {/* Progress bar 1 */}
                <div className="flex justify-between mb-1">
                  <p className="text-sm text-[#15192C] font-semibold ">
                    Projects
                  </p>
                  <p className="text-sm text-[#15192C] font-semibold ">1/3</p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-5">
                  <div
                    className="bg-[#FF6A00] h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>

                {/* Progress bar 2 */}

                <div className="flex justify-between mb-1">
                  <p className="text-sm text-[#15192C] font-semibold ">Users</p>
                  <p className="text-sm text-[#15192C] font-semibold ">1/3</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-5">
                  <div
                    className="bg-[#551FFF] h-2.5 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>

                {/* Progress bar 3 */}
                <div className="flex justify-between mb-1">
                  <p className="text-sm text-[#15192C] font-semibold ">
                    Projects
                  </p>
                  <p className="text-sm text-[#15192C] font-semibold ">
                    7.5k/10k
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-5">
                  <div
                    className="bg-[#FD2254] h-2.5 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[33%]">
          <div className="w-full rounded-[24px] p-[20px] bg-white">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-lg text-[#15192C] font-semibold">Activity</h1>
              <Image src="/dots.svg" width={20} height={20} />
            </div>

            <div className="w-full flex flex-col gap-5 mt-5 h-[500px] overflow-y-auto">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="flex gap-3 text-[#15192C] items-start border-b-[0.7px] pb-5 border-[#ECECEE]"
                >
                  <Image src="/activityimage.svg" width={38} height={38} />

                  <div className="flex flex-col text-xs">
                    <p>James Anderson</p>
                    <p>
                      Called “Books-API” with the JavaScript webhook and
                      commented. “Books-API was readily available with proper
                      documentation and reliability of a proper API. It was just
                      a webhook away from application.”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full rounded-[24px] p-[20px] bg-white mt-5">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-lg text-[#15192C] font-semibold">
                Integration
              </h1>
              <Image src="/dots.svg" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
