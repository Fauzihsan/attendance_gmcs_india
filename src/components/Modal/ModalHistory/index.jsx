import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import HistoryDateTable from "../../Tables/HistoryDateTable";

function ModalHistory({ schedule }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="text-center p-3">
        <button
          onClick={() => setShowModal(true)}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-primary-blue rounded-lg group bg-gradient-to-br bg-primary-blue group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">History</span>
        </button>
      </div>
      {showModal && (
        <div id="modalAddStudenttoClass" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div className="relative p-4 mx-auto w-full max-w-6xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  History - Attendance {schedule.class.class_name} - {schedule.course.course_name}
                </h3>

                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="large-modal"
                >
                  <FaRegWindowClose id="cancel" className="w-8 dark:text-white text-primary-blue" size={25} />
                </button>
              </div>
              <div className="flex flex-col px-6 py-2 justify-start">
                <HistoryDateTable schedule={schedule} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalHistory;
