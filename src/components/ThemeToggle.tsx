import { RiMoonLine, RiSunLine } from "react-icons/ri";

interface Props {
  handleThemeToggle: () => void;
}

export function ThemeToggle({ handleThemeToggle }: Props) {
  return (
    <button
      className="border bg-white border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-full text-sm p-2.5"
      id="theme-toggle"
      type="button"
      onClick={handleThemeToggle}
      onLoad={handleThemeToggle}
    >
      <RiMoonLine id="theme-toggle-dark" className={`w-5 h-5 hidden`} />
      <RiSunLine id="theme-toggle-light" className={`w-5 h-5 hidden`} />
    </button>
  );
}
