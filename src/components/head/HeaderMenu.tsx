import { HeaderMenuItems } from "./HeaderMenuItems";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";
import { menu } from "@/data/menu";
import { useMenuStore } from "@/store";

export function HeaderMenu() {
  const isOpenMenuNav = useMenuStore((s) => s.isOpenMenuNav);
  const setOpenMenuNav = useMenuStore((s) => s.setOpenMenuNav);

  return (
    <>
      <button
        className="flex md:hidden toogle-btn"
        onClick={() => setOpenMenuNav(!isOpenMenuNav)}
      >
        <RiMenuLine className="w-6 h-6" />
      </button>
      <div
        className={twMerge(
          clsx(
            "sidebar md:hidden w-full bg-white h-screen fixed top-0 left-0 transition duration-500 ease-in-out z-20 text-base font-semibold leading-6",
            {
              "translate-x-0": isOpenMenuNav,
              "-translate-x-full": !isOpenMenuNav,
            }
          )
        )}
      >
        <div>
          <div className="flex flex-row-reverse mt-2">
            <button
              className="flex close-btn top-0 left-0 p-2 rounded-full hover:bg-gray-700 transition duration-500 ease-in-out mr-4 border border-[#eaeaea] bg-white"
              onClick={() => setOpenMenuNav(false)}
            >
              <RiCloseFill />
            </button>
          </div>
          <div className="px-6 mt-4">
            <div className="flex flex-col justify-start pl-2 bg-white text-[#171717] w-full border-b-2 border-[#eaeaea] font-normal ">
              <div className="flex flex-1 w-full justify-between items-center py-4">
                <div className="flex flex-col justify-start">
                  <span className="text-sm"> Jhonatan Guerrero</span>
                  <span className="text-xs">jhonatanguerrero@outlook.com</span>
                </div>
                <div>
                  <picture>
                    <img
                      src="/images/Admin.jpg"
                      alt="profile"
                      className="w-8 h-8 rounded-full"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <ul>
              {menu.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-start items-center pl-2 bg-white text-[#171717] w-full h-12 border-b-2 border-[#eaeaea] font-normal "
                >
                  <span className="">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          clsx(
            "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition duration-500 ease-in-out z-10",
            {
              block: isOpenMenuNav,
              hidden: !isOpenMenuNav,
            }
          )
        )}
        onClick={() => setOpenMenuNav(false)}
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
