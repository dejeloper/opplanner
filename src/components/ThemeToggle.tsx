import { IconMoon, IconSun } from "./icons";

interface Props {
  handleThemeToggle: () => void;
}

export function ThemeToggle({ handleThemeToggle }: Props) {
  return (
    <button
      id="theme-toggle"
      type="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      onClick={handleThemeToggle}
      onLoad={handleThemeToggle}
    >
      <IconMoon id="theme-toggle-dark" className={`w-5 h-5 hidden`} />
      <IconSun id="theme-toggle-light" className={`w-5 h-5 hidden`} />
    </button>
  );
}
