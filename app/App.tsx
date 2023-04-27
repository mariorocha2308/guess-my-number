"use client";

import DataTable from "@/components/DataTable";
import Toast from "@/components/Toast";
import { useStateAttemps } from "@/src/zustand/useStateAttemps";

const App = () => {

  const { won, gameOver } = useStateAttemps()

  return (  
    <>
      <DataTable/>
      { won || gameOver && (
        <Toast/>
      )}
    </>
  );
}

export default App;