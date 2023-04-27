"use client";

import { useStateAttemps } from '@/src/zustand/useStateAttemps';
import { useState } from 'react';

const Numpad = () => {

  const [attemp, setAttemp] = useState<number[]>([]);
  const { dispatchAttemp, currentRow } = useStateAttemps()

  const onHandleClick = (val: number) => {
    if (attemp.length < 4 && !attemp.includes(val)) return setAttemp([...attemp, val]);
  };

  const submitAttemp = () => {
    if (attemp.length === 4) {   
      dispatchAttemp(attemp, currentRow)
      setAttemp([])
    }
  }

  return (
    <div className="flex flex-col items-center h-4/16 mb-4">
      <input className="mb-4 font-bold text-gray-900 bg-gray-50 h-14 w-full text-center outline-none text-lg" type="text" value={attemp.join(' ')} readOnly />
      <table>
        <tbody>
          <tr>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(1)}>1</button></td>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(2)}>2</button></td>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(3)}>3</button></td>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(4)}>4</button></td>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(5)}>5</button></td>
          </tr>
          <tr>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(6)}>6</button></td>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(7)}>7</button></td>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(8)}>8</button></td>
            <td><button className="p-7 text-center cursor-pointer hover:bg-slate-50 w-full" 
            onClick={() => onHandleClick(9)}>9</button></td>
            <td>
              <button className="bg-transparent bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 hover:border-transparent w-full" onClick={submitAttemp}>Go</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Numpad;