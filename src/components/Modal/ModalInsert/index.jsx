import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import FormClassName from "../../Forms/FormClassName";
import { MODAL_ADD } from "../../../redux/modalSlice";
import FormLecturer from "../../Forms/FormLecturer";
import FormStudent from "../../Forms/FormStudent";
import FormCourse from "../../Forms/FormCourse";
import FormSchedule from "../../Forms/FormSchedule";

function ModalInsert({ type }) {
  const modalAdd = useSelector((state) => state.modal.add);
  const dispatch = useDispatch();

  let title;

  if (type === "student") {
    title = "Student";
  } else if (type === "lecturer") {
    title = "Lecturers";
  } else if (type === "class") {
    title = "Class";
  } else if (type === "course") {
    title = "Course";
  } else {
    title = "Schedule";
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(MODAL_ADD(true));
        }}
        className="text-white bg-gradient-to-r from-primary-blue via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        data-modal-toggle="large-modal"
      >
        Add
      </button>
      {modalAdd && (
        <div id="modalAdd" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div className="relative p-4 mx-auto w-full max-w-xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add New {title}</h3>
                <button
                  onClick={() => {
                    dispatch(MODAL_ADD(false));
                  }}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="large-modal"
                >
                  <FaRegWindowClose id="cancel" className="w-8 dark:text-white text-primary-blue" size={25} />
                </button>
              </div>

              <div className="p-6 space-y-6">{type === "student" ? <FormStudent /> : type === "lecturer" ? <FormLecturer /> : type === "class" ? <FormClassName /> : type === "course" ? <FormCourse /> : <FormSchedule />}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalInsert;
