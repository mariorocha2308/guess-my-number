import { useStateAttemps } from "@/src/zustand/useStateAttemps";
import { RiRestartLine, RiCloseCircleFill, RiCheckboxCircleFill } from 'react-icons/ri'

const Toast = () => {

  const { randomAttemp, dispatchResetGame, gameOver, won } = useStateAttemps()

  return (  
    <div className="max-w-xs bg-white border rounded-md shadow-lg absolute bottom-10 right-10 w-2/3" role="alert">
      <div className="flex p-4 justify-between items-center">
        <div className="flex-shrink-0">
          {won && (
            <RiCheckboxCircleFill className="text-green-500 text-xl" size='30px'/>
          )}
          {gameOver && (
            <RiCloseCircleFill className="text-red-500 text-xl" size='30px'/>
          )}
        </div>

        <div className="ml-3 text-center">
          {won && (
            <p className="text-sm text-green-500 font-bold">
              ¡Win!
            </p>
          )}
          {gameOver && (
            <p className="text-sm text-red-500 font-bold">
            ¡Gameover!
            </p>
          )}
          <p className={`text-lg font-black ${gameOver ? 'text-red-500': 'text-green-500'}`}>
            {randomAttemp.join(' ')}
          </p>
        </div>

        <div className="mx-3">
          <RiRestartLine className="text-gray-400 hover:text-gray-500 cursor-pointer" 
          size='25px'
          onClick={dispatchResetGame}/>
        </div>
      </div>
    </div>
  );
}

export default Toast;