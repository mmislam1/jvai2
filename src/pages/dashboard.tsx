import React from "react";
import Sidebar from "../components/sidebar";
import UserBar from "../components/userBar";
import InfoTabs from "../components/infoTabs";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BarChart from "../components/BarChart";
import VerticalTabs from "../components/verticalTabs";

const Dashboard = () => {

  const data=[
  { id: 1, title: "Tab 1", content: "Content of Tab 1", color:'#22f' },
  { id: 2, title: "Tab 2", content: "Content of Tab 2", color:'#2f2' },
  { id: 3, title: "Tab 3", content: "Content of Tab 3", color:'#22f' },
  { id: 4, title: "Tab 4", content: "Content of Tab 4", color:'#f22' },
  { id: 5, title: "Tab 5", content: "Content of Tab 5", color:'#22f' },
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
          <div className=" flex-[1] md:flex-[7] bg-white flex flex-col items-center h-full justify-center rounded-xl p-6">
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
          <div className="flex-[1] md:flex-[4] bg-white flex flex-col items-center h-full justify-start rounded-xl p-2 md:p-6">
            <VerticalTabs data={data}></VerticalTabs>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
