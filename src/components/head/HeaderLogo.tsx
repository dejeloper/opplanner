import { HeaderMenu } from "./HeaderMenu";

export function HeaderLogo() {
  return (
    <div className="flex items-center w-full">
      <div className="px-3">
        <img
          className="w-10 h-10 border-2 border-white rounded-full"
          src="/logo.svg"
          alt="Logo Opplanner Dos aguacates"
          title="Logo Opplanner"
        />
      </div>
      <HeaderMenu />
    </div>
  );
}
