import { IconMenu } from "../icons";
import { HeaderMenu } from "./HeaderMenu";

export function HeaderLogo() {
  return (
    <div className="flex items-center w-full">
      <div className="px-3">
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="/logo.svg"
          alt="Logo Opplanner Dos aguacates"
          title="Logo Opplanner"
        />
      </div>
      <IconMenu className="w-6 h-6 md:hidden flex" />
      <div className="md:flex hidden">
        <HeaderMenu />
      </div>
    </div>
  );
}
