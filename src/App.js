import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine
} from 'react-icons/ri';

function App() {
  return (
    <div className="bg-[#262837] min-h-screen">
        <Sidebar/>
        {/* Menu mobile */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-x- rounded-tr-xl">
          <button><RiUser3Line/></button>

          <button><RiAddLine/></button>

          <button><RiPieChartLine/></button>

          <button className="text-white"><RiMenu3Fill/></button>
        </nav>
    </div>
  );
}

export default App;
