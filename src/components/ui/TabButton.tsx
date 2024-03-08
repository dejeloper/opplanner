import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function TabButton({ children, ...props }: Props) {
  return (
    <button
      className={twMerge(
        clsx(
          "text-[#808997] border-transparent flex-1 whitespace-nowrap hover:bg-slate-300 border-b-2 px-4 py-2 text-base font-medium border-indigo-500 leading-6",
          { "border-indigo-500": props.active },
          { "border-transparent ": !props.active }
        )
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
