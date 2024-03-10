import { useState } from "react";
import { IconMenu } from "../icons";
import { HeaderMenuItems } from "./HeaderMenuItems";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="flex md:hidden toogle-btn"
        onClick={() => setOpen(!open)}
      >
        <IconMenu className="w-6 h-6" />
      </button>
      <div
        className={twMerge(
          clsx(
            "sidebar md:hidden w-52 bg-gray-900 text-white h-screen fixed top-0 left-0 transition duration-400 ease-in-out z-20",
            {
              "translate-x-0": open,
              "-translate-x-full": !open,
            }
          )
        )}
      >
        <div>
          <ul>
            <li className="flex justify-start items-center pl-4 bg-[#cdcdcd] text-black w-full h-12 border border-slate-400">
              Inicio
            </li>
            <li className="flex justify-start items-center pl-4 bg-[#cdcdcd] text-black w-full h-12 border border-slate-400">
              Proyectos
            </li>
            <li className="flex justify-start items-center pl-4 bg-[#cdcdcd] text-black w-full h-12 border border-slate-400">
              Planeación
            </li>
            <li className="flex justify-start items-center pl-4 bg-[#cdcdcd] text-black w-full h-12 border border-slate-400">
              Equipo
            </li>
            <li className="flex justify-start items-center pl-4 bg-[#cdcdcd] text-black w-full h-12 border border-slate-400">
              Calendario
            </li>
          </ul>
        </div>
      </div>
      <div
        className={twMerge(
          clsx(
            "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition duration-400 ease-in-out z-10",
            {
              block: open,
              hidden: !open,
            }
          )
        )}
        onClick={() => setOpen(false)}
      ></div>

      <nav className="md:flex hidden">
        <ul className="flex justity-start items-center ml-8">
          <li>
            <HeaderMenuItems>Inicio</HeaderMenuItems>
          </li>
          <li>
            <HeaderMenuItems active={true}>Proyectos</HeaderMenuItems>
          </li>
          <li>
            <HeaderMenuItems>Planeación</HeaderMenuItems>
          </li>
          <li>
            <HeaderMenuItems>Equipo</HeaderMenuItems>
          </li>
          <li>
            <HeaderMenuItems>Calendario</HeaderMenuItems>
          </li>
        </ul>
      </nav>
    </>
  );
}
