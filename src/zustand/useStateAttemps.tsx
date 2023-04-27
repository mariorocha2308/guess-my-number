import { create } from "zustand";
import { shuffle } from '../utils/shuffle'
import { rows } from "../utils/TableRows";

export type Attemps = {
  cell: number,
  attemp: number[],
  correctNumbers: number
  correctPositions: number,
}

interface IAttemp {
  currentRow: number,
  randomAttemp: number[],
  listAttemps: Attemps[],
  gameOver: boolean,
  won: boolean,
  dispatchAttemp: (payload: number[], target: number) => void
  dispatchResetGame: () => void
}

export const useStateAttemps = create<IAttemp>((set, get) => ({
  randomAttemp: shuffle(),
  won: false,
  currentRow: 0,
  gameOver: false,
  listAttemps: rows,
  dispatchAttemp: (payload, target) =>  {

    let correctPositions = 0;
    let correctNumbers = 0;
  
    for(let i = 0; i < payload.length; i++) {
      for(let j = 0; j < get().randomAttemp.length; j++) {
        if(get().randomAttemp[j] === payload[i]) {
          correctNumbers++
        }
      }
    }
    
    get().randomAttemp.forEach((correct, i) => {
      if (correct === payload[i]) {
        correctPositions++;
      }
    });
    
    const save = get().listAttemps.map(item => {
      if(target === item.cell) {
        if (payload.join('') === get().randomAttemp.join('')) set({ won: true})
        if (target === 7 && payload !== get().randomAttemp) {
          set({gameOver: true})
        }
        item.attemp = payload,
        item.correctNumbers = correctNumbers,                                         
        item.correctPositions = correctPositions
      }
      return item
    })

    set({listAttemps: save, currentRow: target+1})
  },
  dispatchResetGame: () => {
    set({ randomAttemp: shuffle(), won: false, gameOver: false,
      listAttemps: [
        { cell: 0, attemp: [], correctNumbers: 0, correctPositions: 0 },
        { cell: 1, attemp: [], correctNumbers: 0, correctPositions: 0 },
        { cell: 2, attemp: [], correctNumbers: 0, correctPositions: 0 },
        { cell: 3, attemp: [], correctNumbers: 0, correctPositions: 0 },
        { cell: 4, attemp: [], correctNumbers: 0, correctPositions: 0 },
        { cell: 5, attemp: [], correctNumbers: 0, correctPositions: 0 },
        { cell: 6, attemp: [], correctNumbers: 0, correctPositions: 0 },
        { cell: 7, attemp: [], correctNumbers: 0, correctPositions: 0 }
      ]
    })
  }
}))
