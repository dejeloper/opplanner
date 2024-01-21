import { useEffect } from "react";

import { useIsDarkTheme } from "./hooks";
import { SearchDasboard } from "./components/searchDasboard";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  IconArrowDown,
  IconComment,
  IconMoon,
  IconNotification,
  IconSun,
} from "./components/icons";

function App() {
  const { changeThemeToggle, handleThemeToggle, handleThemeToggleEfect } =
    useIsDarkTheme();

  useEffect(() => {
    handleThemeToggleEfect();
  }, [handleThemeToggleEfect]);

  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
  darkModePreference.addEventListener("change", (e) => {
    const isDark = e.matches;
    changeThemeToggle(isDark);
  });

  return (
    <>
      <div className="grid grid-flow-col grid-cols-6 h-screen ">
        <div className="bg-blue-400 col-span-1">Sidebar</div>
        <div className="col-span-5">
          <div className="flex flex-grow justify-between items-center bg-transparent my-4 mx-2">
            <div className="hidden">
              <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            </div>
            <SearchDasboard />
            <div className="flex items-center gap-1">
              <ThemeToggle handleThemeToggle={handleThemeToggle} />
              <button className="border bg-white dark:bg-two border-gray-200 dark:border-gray-600  hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2.5">
                <IconNotification className="w-5 h-5" />
              </button>
              <button className="border bg-white dark:bg-two border-gray-200 dark:border-gray-600  hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2.5">
                <IconComment className="w-5 h-5" />
              </button>
              <button className="flex items-center mx-6 ">
                <div className="flex flex-col mx-2 text-end">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Jhonatan Guerrero
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-400">
                    Desarrollador
                  </span>
                </div>
                <div className="mx-2">
                  <img
                    src="/images/Admin.jpg"
                    alt="Logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <IconArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="bg-green-400 max-w-screen-2xl">Main</div>
        </div>
      </div>
    </>
  );
}

export default App;
