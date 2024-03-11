import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function TabButton({ children, active, ...props }: Props) {
  return (
    <button
      className={twMerge(
        clsx(
          "text-[#808997] border-transparent flex-1 whitespace-nowrap hover:bg-slate-300 border-b-2 px-2 py-2 text-base font-medium border-indigo-500 leading-6",
          { "border-indigo-500": active },
          { "border-transparent ": !active }
        )
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
