import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { AUTH } from "../../../utils/helpers/AuthCookies";
import "../../../assets/css/style.css";
import DashboardListItem from "../../../components/DashboardListItem";
import GraphicAttendance from "../../../components/GraphicAttendance";
export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <Header />
      <div className="main flex flex-col gap-y-5 bg-primary-white2 dark:bg-primary-black lg:px-7 pt-20 lg:text-xl text-xs h-screen">
        <h1 className="p-3 lg:text-2xl lg:text-left text-lg text-center text-primary-grey dark:text-white">Welcome {AUTH.getFullname()}</h1>
        <div className="bg-primary-white dark:bg-primary-grey text-white py-5 h-max w-full">
          <GraphicAttendance />
        </div>
        <div className="bg-primary-white dark:bg-primary-grey text-white p-5 h-max w-full">
          <DashboardListItem />
        </div>
      </div>
    </>
  );
}
