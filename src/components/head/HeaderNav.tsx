import clsx from "clsx";
import { useState } from "react";
import {
  RiApps2Fill,
  RiArrowDownSLine,
  RiNotification3Fill,
  RiSearchLine,
  RiUser3Fill,
} from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import { HeaderDropdown } from "./HeaderDropdown";
import {
  menuApps,
  menuNotifications,
  menuSearch,
  menuUser,
} from "../../data/dropdowns";

export function HeaderNav() {
  const [openDropdownUser, setOpenDropdownUser] = useState(false);
  const [openDropdownNotifications, setOpenDropdownNotifications] =
    useState(false);
  const [openDropdownApps, setOpenDropdownApps] = useState(false);
  const [openDropdownSearch, setOpenDropdownSearch] = useState(false);

  return (
    <div className="flex flex-col relative w-full">
      <div
        className={twMerge(
          clsx("fixed top-0 left-0 w-full h-full bg-transparent z-10", {
            block:
              openDropdownUser ||
              openDropdownNotifications ||
              openDropdownApps ||
              openDropdownSearch,
            hidden:
              !openDropdownUser &&
              !openDropdownNotifications &&
              !openDropdownApps &&
              !openDropdownSearch,
          })
        )}
        onClick={() => {
          setOpenDropdownUser(false);
          setOpenDropdownNotifications(false);
          setOpenDropdownApps(false);
          setOpenDropdownSearch(false);
        }}
      ></div>
      <div className="navbar flex justify-end items-center gap-2">
        <button
          className="flex items-center w-8 h-8"
          type="button"
          onClick={() => setOpenDropdownSearch(!openDropdownSearch)}
        >
          <RiSearchLine />
        </button>
        <button
          className="flex items-center w-8 h-8"
          type="button"
          onClick={() => setOpenDropdownApps(!openDropdownApps)}
        >
          <RiApps2Fill />
        </button>
        <button
          className="flex items-center w-8 h-8"
          type="button"
          onClick={() =>
            setOpenDropdownNotifications(!openDropdownNotifications)
          }
        >
          <RiNotification3Fill />
        </button>
        <button
          className="flex items-center w-8 h-8"
          type="button"
          onClick={() => setOpenDropdownUser(!openDropdownUser)}
        >
          <RiUser3Fill />
          <RiArrowDownSLine />
        </button>
      </div>
      <HeaderDropdown
        menu={menuSearch}
        openDropdown={openDropdownSearch}
        nivel={4}
      />
      <HeaderDropdown
        menu={menuApps}
        openDropdown={openDropdownApps}
        nivel={3}
      />
      <HeaderDropdown
        menu={menuNotifications}
        openDropdown={openDropdownNotifications}
        nivel={2}
      />
      <HeaderDropdown
        menu={menuUser}
        openDropdown={openDropdownUser}
        nivel={1}
      />
    </div>
  );
}
