// import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";
import ApexChart from "../Charts/linechart";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Player } from "@lordicon/react";
import AOS from "aos";
import { Spinner } from "@chakra-ui/react";
import "aos/dist/aos.css";
import coin from "../assets/wired-lineal-298-coins.gif";
import rank from "../assets/wired-flat-153-bar-chart.gif";
import gift from "../assets/wired-flat-412-gift.gif";
import profile from "../assets/wired-outline-261-emoji-smile.gif"
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [name,setName] = useState('');
  const [coins,setCoins] = useState(0);
  const [level,setLevel] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // localStorage.setItem('userEmail', 'newuser@gmail.com');
        const userEmail = localStorage.getItem('userEmail');
        const response = await fetch(`http://localhost:5000/get/dashboard/${userEmail}`);
        const data = await response.json();
        setName(data.firstName);
        setCoins(data.coins);
        setLevel(data.level);

        // Update the dashboardData state with the fetched data
        setDashboardData([data]);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately
      }
    };

    fetchData();
  }, []);
  console.log(dashboardData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false); 
      AOS.init({
        duration: 1500,
      });
    }, 1000); 
  }, []);
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
      curve: "smooth",
      
      colors: ["#008ffb", "#00e396","#feb019","#ff4560"],  
      
    },
    title: {
      text: "Analysis",
      align: "center",
      style: {
        color: "#0f766e", // Set the title color here
      },  
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
      name: "Eye Contact",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Confidence",
      data: [20, 32, 45, 38, 56, 72, 84, 105, 120],
    },
    {
      name: "Boldness",
      data: [30, 52, 45, 78, 26, 42, 94, 125, 150],
    },
    {
      name: "Clarity",
      data: [40, 12, 4, 18,46, 92, 64, 135, 140],
    },
  ]);
  
  // OverAll
  const [optionsA, setOptionsA] = useState({
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
      curve: "smooth",
      colors: ["#14b8a6"], 
    },
    title: {
      text: "Overall Percentage",
      align: "center",
      style: {
        color: "#0f766e", // Set the title color here
      },
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.9,
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

  const [seriesA, setSeriesA] = useState([
    {
      name: "Performance",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]);

  const [chartData, setChartData] = useState({
    series: [
      { name: "Sun", data: generateData(52, { min: 0, max: 90 }) },
      { name: "Mon", data: generateData(52, { min: 0, max: 90 }) },
      { name: "Tue", data: generateData(52, { min: 0, max: 90 }) },
      { name: "Wed", data: generateData(52, { min: 0, max: 90 }) },
      { name: "Thu", data: generateData(52, { min: 0, max: 90 }) },
      { name: "Fri", data: generateData(52, { min: 0, max: 90 }) },
      { name: "Sat", data: generateData(52, { min: 0, max: 90 }) },
    ],
    options: {
      chart: {
        height: 350,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#52BE80"],
      title: {
        text: "HeatMap Chart (Single color)",
        align: "center",
        style: {
          color: "#0f766e", // Set the title color here
        },
      },
    },
  });

  return (
    <div>
      {loading ? (
        // Show loader while data is being fetched or processed
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
          <p> &nbsp; Loading</p>
        </div>
      ) : (
      <>
        <NavBar />
        
        <div className="w-[calc(100%-72px)] h-[260px] sm:h-[160px] bg-gray-200 mx-auto mt-[8px] rounded-lg border border-borders">
          <div id="main" className="flex flex-col sm:flex-row h-fit">
            <div id="porfile-pic">
              <div className="w-[80px] h-[80px] mt-[40px] border border-borders sm:ml-[50px] mx-auto rounded-lg  items-center justify-center flex">
              <img src={profile} alt="logo" className="w-15" />
              </div>
            </div>
            <div className="flex flex-col w-[280px] text-center sm:text-left mx-auto sm:ml-0">
              <div
                id="username"
                className="text-[28px] font-bold mt-[20px] sm:mt-[40px] text-teal-500 sm:ml-[30px] ml-0"
              >
                {name}
              </div>
              <div
                id="username"
                className="text-[18px] mt-[6px] text-text_2 sm:ml-[30px] ml-0 text-black"
              >
                Rank: 9090
              </div>
            </div>
            <div className="md:flex hidden flex-row absolute right-[90px] mt-[1.6rem]">
            <div className="w-[80px] h-[80px] mt-[40px] border border-borders ml-[20px]     rounded-lg relative flex items-center justify-center">
                <img src={coin} alt="logo" className="w-12" />
                <i className="bi bi-x-lg font-bold text-borders absolute left-1/2 -translate-x-1/2 top-[-0.5rem] -translate-y-1/2">
                  {coins}
                </i>
              </div>
              <div className="w-[80px] h-[80px] mt-[40px] border border-borders ml-[20px]     rounded-lg relative flex items-center justify-center">
                <img src={rank} alt="logo" className="w-12" />
                <i className="bi bi-x-lg font-bold text-borders absolute left-1/2 -translate-x-1/2 top-[-0.5rem] -translate-y-1/2">
                  {level}
                </i>
              </div>
              <div className="w-[80px] h-[80px] mt-[40px] border border-borders ml-[20px]     rounded-lg relative flex items-center justify-center">
                <img src={gift} alt="logo" className="w-12" />
                <i className="bi bi-x-lg font-bold text-borders absolute left-1/2 -translate-x-1/2 top-[-0.5rem] -translate-y-1/2">
                  Try Now!  
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row sm:flex-col flex-col w-[calc(100%-72px)] mx-auto gap-4 justify-between">
          <div className="lg:w-[358px] sm:w-full h-[506px] bg-gray-200 mt-[8px] rounded-lg border border-borders">
            <div className="text-[22px] font-bold mt-[40px] text-teal-500 ml-[50px]">
              Community Stats
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px]  text-white">
              <span className="text-text_2 font-bold  text-black">Views:</span>{" "}
              <span className="text-text_2 font-bold text-teal-700">679</span>
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px]  text-white">
              <span className="text-text_2 font-bold text-black">
                Solutions:
              </span>{" "}
              <span className="text-text_2 font-bold text-teal-700">709</span>
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px] mb-[40px]  text-white">
              <span className="text-text_2 font-bold text-black">
                Reputation:
              </span>{" "}
              <span className="text-text_2 font-bold text-teal-700">798</span>
            </div>
          </div>
          <div className="lg:w-full sm:w-full sm: h-[506px] h-[506px] bg-gray-200 mt-[8px] rounded-lg border border-borders relative">
            <div className="flex sm:flex-row flex-col ml-[30px]">
              <div className="flex flex-col relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
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
              <div className="flex flex-col relative mr-[20px] mt-[40px] w-[200px] sm:w-[280px]  sm:ml-0">
                <div className="text-black mt-1 ml-[17.5rem]">
                  <div id="chart">
                    <ReactApexChart
                      options={optionsA}
                      series={seriesA}
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
        {/* Heat Map */}
        <div className="w-[calc(100%-72px)] h-full sm:h-full bg-gray-200 mx-auto mt-[8px] rounded-lg border border-borders" data-aos="fade-left">
          <div id="chart">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="heatmap"
              height={350}
            />
          </div>
        </div>
        {/* Table */}
        <div className="w-[calc(100%-72px)] h-full sm:h-full bg-gray-200 mx-auto mt-[8px] rounded-lg border border-borders hover:shadow-xl" data-aos="fade-right">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b text-teal-500 font-bold">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 px-4 text-left align-middle font-bold text-xl text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 max-w-[150px]">
                  S.NO
                </th>
                <th class="h-12 px-4 text-left align-middle font-bold text-xl text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Status
                </th>
                <th class="h-12 px-4 text-left align-middle font-bold text-xl text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Inventory
                </th>
                <th class="h-12 px-4 text-left align-middle font-bold text-xl text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Vendor
                </th>
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium ">
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
        
      </>
      )}
    </div>
  );
};

export default Dashboard;
