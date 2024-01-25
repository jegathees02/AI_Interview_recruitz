// import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";
import ApexChart from "../Charts/linechart";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
const Dashboard = () => {
    const generateData = (count, range) => {
        const data = [];
        for (let i = 0; i < count; i++) {
          data.push({
            x: i + 1,
            y: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min,
          });
        }
        return data;
      };
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]);

  const [chartData, setChartData] = useState({
    series: [
      { name: "Metric1", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Metric2", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Metric3", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Metric4", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Metric5", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Metric6", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Metric7", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Metric8", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Metric9", data: generateData(18, { min: 0, max: 90 }) },
    ],
    options: {
      chart: {
        height: 350,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#008FFB"],
      title: {
        text: "HeatMap Chart (Single color)",
      },
    },
  });

  return (
    <div>
      <>
        <NavBar />
        <div className="w-[calc(100%-72px)] h-[260px] sm:h-[160px] bg-black mx-auto mt-[8px] rounded-lg border border-borders">
          <div id="main" className="flex flex-col sm:flex-row h-fit">
            <div id="porfile-pic">
              <div className="w-[80px] h-[80px] mt-[40px] border border-borders sm:ml-[50px] mx-auto rounded-lg"></div>
            </div>
            <div className="flex flex-col w-[280px] text-center sm:text-left mx-auto sm:ml-0">
              <div
                id="username"
                className="text-[28px] font-bold mt-[20px] sm:mt-[40px] text-white sm:ml-[30px] ml-0"
              >
                Sanjeevi
              </div>
              <div
                id="username"
                className="text-[18px] mt-[6px] text-text_2 sm:ml-[30px] ml-0 text-white"
              >
                Rank: 9090
              </div>
            </div>
            <div className="md:flex hidden flex-row absolute right-[90px]">
              <div className="w-[80px] h-[80px] mt-[40px] border border-borders ml-[20px] rounded-lg relative">
                <i className="bi bi-x-lg text-borders absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></i>
              </div>
              <div className="w-[80px] h-[80px] mt-[40px] border border-borders ml-[20px] rounded-lg relative">
                <i className="bi bi-x-lg text-borders absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></i>
              </div>
              <div className="w-[80px] h-[80px] mt-[40px] border border-borders ml-[20px] rounded-lg relative">
                <i className="bi bi-x-lg text-borders absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row sm:flex-col flex-col w-[calc(100%-72px)] mx-auto gap-4 justify-between">
          <div className="lg:w-[358px] sm:w-full h-[506px] bg-black mt-[8px] rounded-lg border border-borders">
            <div className="text-[22px] font-bold mt-[40px] text-white ml-[50px]">
              Community Stats
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px]  text-white">
              <span className="text-text_2  text-white">Views:</span> 679
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px]  text-white">
              <span className="text-text_2  text-white">Solutions:</span> 908
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px] mb-[40px]  text-white">
              <span className="text-text_2  text-white">Reputation:</span> 789
            </div>
          </div>
          <div className="lg:w-full sm:w-full sm: h-[506px] h-[506px] bg-white mt-[8px] rounded-lg border border-borders relative">
            <div className="flex sm:flex-row flex-col">
              <div className="flex flex-col relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
                <div id="chart">
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height={450}
                    width={450}
                  />
                </div>
              </div>
              <div className="flex flex-col relative mr-[20px] mt-[40px] w-[200px] sm:w-[280px]  sm:ml-0">
                <div className="text-black mt-4 ml-[17.5rem]">
                  <div id="chart">
                    <ReactApexChart
                      options={options}
                      series={series}
                      type="area"
                      height={450}
                      width={450}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="w-[calc(100%-72px)] h-full sm:h-full bg-gray-100 mx-auto mt-[8px] rounded-lg border border-borders">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 max-w-[150px]">
                  Name
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Status
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Inventory
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Vendor
                </th>
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                  Glimmer Lamps
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  In Production
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  500 in stock
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Luminance Creations
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                  Aqua Filters
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Available for Order
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  750 in stock
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  HydraClean Solutions
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                  Eco Planters
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Backordered
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  300 in stock
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  GreenGrowth Designers
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                  Zest Juicers
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Newly Launched
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  1000 in stock
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  FreshTech Appliances
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                  Flexi Wearables
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Selling Fast
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  200 in stock
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Vitality Gear Co.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Heat Map */}
        <div className="w-[calc(100%-72px)] h-full sm:h-full bg-black-100 mx-auto mt-[8px] rounded-lg border border-borders">
          <div id="chart">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="heatmap"
              height={350}
            />
          </div>
        </div>
      </>

      <></>
    </div>
  );
};

export default Dashboard;
