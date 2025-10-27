import React from "react";
import Sidebar from "../components/sidebar";
import UserBar from "../components/userBar";
import InfoTabs from "../components/infoTabs";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BarChart from "../components/BarChart";
import VerticalTabs from "../components/verticalTabs";
import { useDevice } from "../hooks/useDevice";

const Dashboard = () => {

  const device=useDevice()
  const data = [
    { id: 1, title: "Tab 1", content: "Content of Tab 1", time: '5 mins ago', read: true },
    { id: 2, title: "Tab 2", content: "Content of Tab 2", time: '5 mins ago', read: true },
    { id: 3, title: "Tab 3", content: "Content of Tab 3", time: '5 mins ago', read: false },
    { id: 4, title: "Tab 4", content: "Content of Tab 4", time: '5 mins ago', read: true },
    { id: 5, title: "Tab 5", content: "Content of Tab 5", time: '5 mins ago', read: true },
    { id: 6, title: "Tab 1", content: "Content of Tab 1", time: '5 mins ago', read: true },
    { id: 7, title: "Tab 2", content: "Content of Tab 2", time: '5 mins ago', read: true },
    { id: 8, title: "Tab 3", content: "Content of Tab 3", time: '5 mins ago', read: false },
    { id: 9, title: "Tab 4", content: "Content of Tab 4", time: '5 mins ago', read: true },
    { id: 10, title: "Tab 5", content: "Content of Tab 5", time: '5 mins ago', read: true },
  ];

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Sidebar>
      <InfoTabs />
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex flex-col md:flex-row items-center h-full justify-between w-full gap-6">
          <div className="w-full md:flex-[7] bg-white flex flex-col items-center h-full justify-start rounded-xl p-2 px-4">
            <div className={`flex flex-col md:flex-row border-b border-gray-200 h-[80px] w-full mx-2 items-start md: items-center justify-center md:justify-between`}>
              <div className="flex flex-row min-w-[100%] md:min-w-[33%] ">
                <h2 className="text-black text-md font-bold">USAGE ANALYTICS</h2>
              </div>
              <div className="flex flex-row justify-between md:flex-1 w-full">
                <div className="flex flex-row">
                  <p className="text-gray-600 text-sm">1 jan 24 - 5 jan 25</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-gray-600 text-sm pe-4">Month</p>
                  <p className="text-gray-600 text-sm pe-4">Year</p>
                  <p className="text-gray-600 text-sm"></p>
                </div>
              </div>
            </div>
            <BarChart
              data={[
                { label: "may", value: 99 },
                { label: "may", value: 79 },
                { label: "may", value: 29 },
                { label: "may", value: 99 },
                { label: "may", value: 79 },
                { label: "may", value: 29 },
                { label: "may", value: 99 },
                { label: "may", value: 79 },
                { label: "may", value: 29 },
                { label: "may", value: 99 },
                { label: "may", value: 79 },
                { label: "may", value: 29 },
              ]}
              title={"Test"}
            ></BarChart>
          </div>
          <div className="w-full flex-[1] md:flex-[4] bg-white flex flex-col items-center h-full justify-start rounded-xl px-4 ">
            <div className="flex flex-row border-b border-gray-200 h-[80px] w-full mb-2 justify-between items-center">
              <div className="flex flex-row justify-center items-start  ">
                <h2 className="text-black text-mg">RECENT NOTIFICATIONS</h2>
              </div>
            </div>
            <div className="flex flex-row flex-1 w-full ">
              <VerticalTabs data={data}></VerticalTabs>
            </div>

          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
