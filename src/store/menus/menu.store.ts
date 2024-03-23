import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface MenuStore {
  isOpenMenuSearch?: boolean;
  isOpenMenuApps?: boolean;
  isOpenMenuNotifications?: boolean;
  isOpenMenuUser?: boolean;
  isOpenMenuNav?: boolean;
  setOpenMenuSearch: (isOpen: boolean) => void;
  setOpenMenuApps: (isOpen: boolean) => void;
  setOpenMenuNotifications: (isOpen: boolean) => void;
  setOpenMenuUser: (isOpen: boolean) => void;
  setOpenMenuNav: (isOpen: boolean) => void;
  clearOpenMenus: () => void;
}

const storeApiMenu: StateCreator<MenuStore> = (set, get) => ({
  isOpenMenuUser: false,
  isOpenMenuNotifications: false,
  isOpenMenuApps: false,
  isOpenMenuSearch: false,
  isOpenMenuNav: false,
  setOpenMenuSearch: (isOpen) => {
    get().clearOpenMenus();
    set({ isOpenMenuSearch: isOpen });
  },
  setOpenMenuApps: (isOpen) => {
    get().clearOpenMenus();
    set({ isOpenMenuApps: isOpen });
  },
  setOpenMenuNotifications: (isOpen) => {
    get().clearOpenMenus();
    set({ isOpenMenuNotifications: isOpen });
  },
  setOpenMenuUser: (isOpen) => {
    get().clearOpenMenus();
    set({ isOpenMenuUser: isOpen });
  },
  setOpenMenuNav: (isOpen) => {
    get().clearOpenMenus();
    set({ isOpenMenuNav: isOpen });
  },
  clearOpenMenus: () => {
    set({ isOpenMenuSearch: false });
    set({ isOpenMenuApps: false });
    set({ isOpenMenuNotifications: false });
    set({ isOpenMenuUser: false });
  },
});

export const useMenuStore = create<MenuStore>()(devtools(storeApiMenu));
