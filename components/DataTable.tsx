"use client";

import { Attemps, useStateAttemps } from "@/src/zustand/useStateAttemps";
import Numpad from "./Numpad";

const DataTable = () => {

  const { listAttemps } = useStateAttemps()

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-md bg-white">
      <table className="text-sm text-left text-gray-500 bg-gray-50">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" 
            className="w-80 px-6 py-3 text-center">
              Your Guess
            </th>
            <th scope="col" 
            className="w-3 px-6 py-3 text-center">
              Correct Numbers
            </th>
            <th scope="col" 
            className="w-3 px-6 py-3 text-center">
              Correct Positions
            </th>
          </tr>
        </thead>
        <tbody>
          {listAttemps?.map((attemps: Attemps, idx) => (
            <tr className="bg-white border-b" key={idx}>
              <th scope="row" 
              className="h-10 font-bold text-gray-900 whitespace-nowrap text-center">
                {attemps.attemp.join(' ')}
              </th>
              <td scope="row" 
              className="h-10 font-bold text-gray-900 whitespace-nowrap text-center">
                {attemps.attemp.length === 0 ? '' : attemps.correctNumbers}
              </td>
              <td scope="row" 
              className="h-10 font-bold text-gray-900 whitespace-nowrap text-center">
                {attemps.attemp.length === 0 ? '' : attemps.correctPositions }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Numpad/>
    </div>
  );
}

export default DataTable;