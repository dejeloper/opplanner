import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface HeaderDropdownProps {
  id: number;
  name: string;
  icon: string;
  path: string;
  active: boolean;
}

export const HeaderDropdown = ({
  menu,
  openDropdown,
  nivel,
}: {
  menu: HeaderDropdownProps[];
  openDropdown: boolean;
  nivel: number;
}) => {
  let right = "";
  switch (nivel) {
    case 1:
      right = "right-0 w-60";
      break;
    case 2:
      right = "left-0 right-14";
      break;
    case 3:
      right = "left-0 right-24";
      break;
    case 4:
      right = "left-0 right-32";
      break;
    default:
      right = "left-0 right-4";
      break;
  }

  return (
    <div
      className={twMerge(
        clsx(
          right,
          "top-8 absolute max-w-60 h-auto bg-white border border-slate-400 z-20 p-4 rounded-md shadow-md transition-all duration-300 ease-in-out overflow-hidden",
          {
            hidden: !openDropdown,
            block: openDropdown,
          }
        )
      )}
    >
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <a href={`${item.path}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
