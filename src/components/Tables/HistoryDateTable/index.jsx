import { useSubscription } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_TIMESTAMP_RECORD } from "../../../api/Model/Subscription/GetTimestampRecord";
import LoadingAnimationXL from "../../Loading/LoadingAnimationXL";

function HistoryDateTable({ schedule }) {
  const [timestamp, setTimestamp] = useState([]);

  const { data, loading } = useSubscription(GET_TIMESTAMP_RECORD, {
    variables: {
      schedules_id: schedule.id,
    },
  });

  useEffect(() => {
    setTimestamp(data?.timestamp_record);
  }, [data]);

  const historyDate = () => {
    return timestamp?.length !== 0 ? (
      timestamp?.map((d) => (
        <tr key={d.id} className="dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-primary-white2 dark:hover:bg-gray-700">
          <td className="px-6 py-4">{d.meet_number}</td>
          <td className="px-6 py-4">{d.date_meet}</td>
        </tr>
      ))
    ) : (
      <tr className="dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-primary-white2 dark:hover:bg-gray-700">
        <td colSpan={2} className="text-center px-6 py-4">
          Record date meeting for this class is empty!
        </td>
      </tr>
    );
  };

  return (
    <div className="relative h-80 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-primary-white2 dark:bg-primary-black dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Meet
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} rowSpan={6}>
                <LoadingAnimationXL />
              </td>
            </tr>
          ) : (
            historyDate()
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryDateTable;
