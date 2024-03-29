import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface HeaderDropdownProps {
  id: number;
  name: string;
  icon: string;
  path: string;
  active: boolean;
  divider?: boolean;
}

export const HeaderDropdown = ({
  menu,
  openDropdown,
  right,
}: {
  menu: HeaderDropdownProps[];
  openDropdown?: boolean;
  right: string;
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          right,
          "top-8 absolute max-w-60 h-auto bg-white border border-slate-400 z-20 p-2 rounded-md shadow-md transition-all duration-500 ease-in-out overflow-hidden",
          {
            hidden: !openDropdown,
            block: openDropdown,
          }
        )
      )}
    >
      <ul>
        {menu.map((item) => (
          <li
            key={item.id}
            className={twMerge(
              clsx(
                "flex justify-start items-center h-10 px-2 bg-white rounded hover:bg-slate-200 transition-all duration-200 ease-in-out cursor-pointer",
                {
                  "border-t border-slate-400 rounded-t-none": item.divider,
                }
              )
            )}
          >
            <a href={`${item.path}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
