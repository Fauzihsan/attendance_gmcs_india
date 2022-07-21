import React from "react";
import "../../../pages/AdminPages/style.css";
import { Link } from "react-router-dom";
import { RiDashboard3Line, RiUser3Line, RiListSettingsLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { AiOutlineSchedule, AiOutlineBook } from "react-icons/ai";

function MenuStaff() {
  return (
    <>
      <Link to="/admin " className="hover:bg-primary-blue hover:text-primary-white p-3 dark:text-white text-primary-grey hover:no-underline">
        <div className="flex flex-row items-center">
          <RiDashboard3Line size={20} className="mr-4" />
          Dashboard
        </div>
      </Link>

      <Link to="/admin/kelolaMahasiswa" className="hover:bg-primary-blue hover:text-primary-white p-3 dark:text-white text-primary-grey hover:no-underline">
        <div className="side-menu flex flex-row items-center">
          <RiUser3Line size={20} className="mr-4" />
          Manage Students
        </div>
      </Link>

      <Link to="/admin/kelolaDosen" className="hover:bg-primary-blue hover:text-primary-white p-3 dark:text-white text-primary-grey hover:no-underline">
        <div className="side-menu flex flex-row items-center">
          <GiTeacher size={20} className="mr-4" />
          Manage Lecturers
        </div>
      </Link>

      <Link to="/admin/kelolaKelas" className="hover:bg-primary-blue hover:text-primary-white p-3 dark:text-white text-primary-grey hover:no-underline">
        <div className="side-menu flex flex-row items-center">
          <RiListSettingsLine size={20} className="mr-4" />
          Class
        </div>
      </Link>

      <Link to="/admin/kelolaMatkul" className="hover:bg-primary-blue hover:text-primary-white p-3 dark:text-white text-primary-grey hover:no-underline">
        <div className="side-menu flex flex-row items-center">
          <AiOutlineBook size={20} className="mr-4" />
          Manage Courses
        </div>
      </Link>

      <Link to="/admin/penjadwalan" className="hover:bg-primary-blue hover:text-primary-white p-3 dark:text-white text-primary-grey hover:no-underline">
        <div className="side-menu flex flex-row items-center">
          <AiOutlineSchedule size={20} className="mr-4" />
          Scheduling & Attendance
        </div>
      </Link>

      <Link to="/admin/unduh" className="hover:bg-primary-blue hover:text-primary-white p-3 dark:text-white text-primary-grey hover:no-underline">
        <div className="side-menu flex flex-row items-center">
          <HiOutlineDocumentDownload size={20} className="mr-4" />
          Download Attendance
        </div>
      </Link>
    </>
  );
}

export default MenuStaff;
