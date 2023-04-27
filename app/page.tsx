import { Poppins } from 'next/font/google'
import App from './App'

const poppins = Poppins({weight: '500', style: 'normal', subsets: ['devanagari']})

export default function Page() {

  return (
    <main className={`flex relative flex-col h-screen justify-center items-center bg-gray-200 select-none 
    ${poppins.className}`}>
      <App/>
    </main>
  )
}
