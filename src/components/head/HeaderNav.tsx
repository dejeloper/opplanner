import clsx from "clsx";
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
import { useMenuStore } from "@/store";

export function HeaderNav() {
  const openDropdownSearch = useMenuStore((s) => s.isOpenMenuSearch);
  const setOpenDropdownSearch = useMenuStore((s) => s.setOpenMenuSearch);
  const openDropdownApps = useMenuStore((s) => s.isOpenMenuApps);
  const setOpenDropdownApps = useMenuStore((s) => s.setOpenMenuApps);
  const openDropdownNotifications = useMenuStore(
    (s) => s.isOpenMenuNotifications
  );
  const setOpenDropdownNotifications = useMenuStore(
    (s) => s.setOpenMenuNotifications
  );
  const openDropdownUser = useMenuStore((s) => s.isOpenMenuUser);
  const setOpenDropdownUser = useMenuStore((s) => s.setOpenMenuUser);

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
        right="right-32 w-52"
      />
      <HeaderDropdown
        menu={menuApps}
        openDropdown={openDropdownApps}
        right="right-24 w-60"
      />
      <HeaderDropdown
        menu={menuNotifications}
        openDropdown={openDropdownNotifications}
        right="right-14 w-60"
      />
      <HeaderDropdown
        menu={menuUser}
        openDropdown={openDropdownUser}
        right="right-0 w-60"
      />
    </div>
  );
}
