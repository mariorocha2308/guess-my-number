"use client";

import { useStateAttemps } from '@/src/zustand/useStateAttemps';
import { RiDeleteBack2Fill } from 'react-icons/ri'
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

  const onDelete = () => {
    setAttemp(attemp.splice(0, attemp.length -1 ))
  }

  return (
    <div className="flex flex-col items-center h-4/16 mb-4">
      <div className="flex relative w-full">
        <input className="mb-4 font-bold text-gray-900 bg-gray-50 h-12 w-full text-center outline-none text-lg" type="text" 
        value={attemp.join(' ')} readOnly />
        <RiDeleteBack2Fill className="absolute right-8 top-4 text-red-500 text-xl cursor-pointer hover:text-red-400"
        onClick={onDelete}/>
      </div>
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
            <td className="flex">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold w-full h-[80px]" 
              onClick={submitAttemp}>Go</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Numpad;