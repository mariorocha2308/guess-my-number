"use client";

import { useStateAttemps } from "@/src/zustand/useStateAttemps";
import { RiRestartLine, RiCloseCircleFill, RiCheckboxCircleFill } from 'react-icons/ri'

const Toast = () => {

  const { randomAttemp, dispatchResetGame, gameOver, won } = useStateAttemps()

  return (  
    <div className="max-w-xs bg-white border rounded-md shadow-lg absolute bottom-10 right-10" role="alert">
    <div className="flex p-4 justify-between items-center">
      <div className="flex-shrink-0">
        {won && (
          <RiCheckboxCircleFill className="text-green-500 text-xl"/>
        )}
        {gameOver && (
          <RiCloseCircleFill className="text-red-500 text-xl"/>
        )}
      </div>

      <div className="ml-3 text-center">
        {won && (
          <p className="text-sm text-gray-900 font-bold">
            ¡Felicitaciones, lo has logrado!
          </p>
        )}
        {gameOver && (
          <p className="text-sm text-red-600 font-bold">
          ¡Se te acabaron los intentos!
          </p>
        )}
        <p className={`text-lg font-bold ${gameOver ? 'text-red-500': 'text-green-500'}`}>
          {randomAttemp.join(' ')}
        </p>
      </div>

      <div className="mx-3">
      <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-gray-400 hover:text-gray-500 outline-none" 
      onClick={dispatchResetGame}>
        <RiRestartLine className="text-xl"/>
      </button>
    </div>
    </div>
  </div>
  );
}

export default Toast;