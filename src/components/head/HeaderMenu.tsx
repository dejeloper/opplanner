import { useState } from "react";
import { IconMenu } from "../icons";
import { HeaderMenuItems } from "./HeaderMenuItems";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { RiCloseFill } from "react-icons/ri";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      id: 1,
      name: "Inicio",
      icon: "",
      path: "/",
      active: false,
    },
    {
      id: 2,
      name: "Proyectos",
      icon: "",
      path: "/#projects",
      active: true,
    },
    {
      id: 3,
      name: "Planeación",
      icon: "",
      path: "/#planning",
      active: false,
    },
    {
      id: 4,
      name: "Equipo",
      icon: "",
      path: "/#team",
      active: false,
    },
    {
      id: 5,
      name: "Calendario",
      icon: "",
      path: "/#calendar",
      active: false,
    },
  ];

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
            "sidebar md:hidden w-52 bg-gray-700 text-[#808997] h-screen fixed top-0 left-0 transition duration-400 ease-in-out z-20 text-base font-semibold leading-6",
            {
              "translate-x-0": open,
              "-translate-x-full": !open,
            }
          )
        )}
      >
        <div>
          <div className="flex">
            <button
              className="flex close-btn top-0 left-44 p-2 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out"
              onClick={() => setOpen(false)}
            >
              <RiCloseFill />
            </button>
          </div>
          <ul>
            {menu.map((item) => (
              <li
                key={item.id}
                className="flex justify-start items-center pl-4 bg-white text-[#808997] w-full h-12 border border-slate-400"
              >
                {item.name}
              </li>
            ))}
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
          {menu.map((item) => (
            <li key={item.id}>
              <HeaderMenuItems active={item.active}>
                {item.name}
              </HeaderMenuItems>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
