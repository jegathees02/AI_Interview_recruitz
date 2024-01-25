// import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";
import ApexChart from "../Charts/linechart";
import ApexCharts from "apexcharts";
const Dashboard = () => {
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

        <div className="flex lg:flex-row sm:flex-col flex-col w-[calc(100%-72px)] mx-auto justify-between">
          <div className="lg:w-[calc(40%-4px)] sm:w-full h-[506px] bg-black mt-[8px] rounded-lg border border-borders">
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
          <div className="lg:w-[calc(60%-4px)] sm:w-full sm: h-[506px] h-[506px] bg-white mt-[8px] rounded-lg border border-borders relative">
            <div className="flex sm:flex-row flex-col justify-between">
              <div className="flex flex-col relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
                <div className="text-black mt-4 ml-12" id="app"></div>
              </div>
              <div className="flex flex-col relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
                <div className="text-black mt-4 ml-12">Hi2</div>
              </div>
            </div>
          </div>
        </div>
      </>

      <></>
    </div>
  );
};

export default Dashboard;
