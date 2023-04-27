import React from "react";
import Clock from "../../public/icons/clock.svg";
import Settings from "../../public/icons/settings.svg";
import Info from "../../public/icons/info.svg"
import Tomato from "../../public/icons/tomato.svg"
import Link from 'next/link'
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ['latin', 'cyrillic'] })
const jetbrainsmono = JetBrains_Mono({ subsets: ['latin', 'cyrillic'] })

export default function Sidebar() {
  return (
    <div className={inter.className + " fixed top-0 left-0 h-screen w-[86px] bg-sidebar-gray hover:w-[235px] transition-all px-[15px] pt-[15px] overflow-hidden"}>
      <div className={jetbrainsmono.className + " mb-[40px] text-white pl-[10px] flex flex-row items-start"}>
        <Tomato className="min-w-[36px] max-w-[36px] h-[36px] fill-white"/>
        <div className="ml-[25px] mt-[5px] text-xl">
          Croakodoro
        </div>
      </div>
      <nav>
        <ul className="flex flex-col gap-[20px] justify-center">
          <li className="sidebar-icon sidebar-icon_active">
            <Link className="sidebar-link" href='/'><Clock/> Задачи</Link>
          </li>
          <li className="sidebar-icon">
            <Link className="sidebar-link" href='/settings'><Settings/> Настройки</Link>
          </li>
          <li className="sidebar-icon">
            <Link className="sidebar-link" href='/info'><Info/> Информация </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}