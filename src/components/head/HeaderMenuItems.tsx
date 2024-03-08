import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function HeaderMenuItems({ children, ...props }: Props) {
  return (
    <button
      className={twMerge(
        clsx(
          "text-[#808997] hover:text-[#1b232c] px-4 text-base font-semibold border-indigo-500 leading-6"
        )
      )}
      type="button"
      {...props}
    >
      <span
        className={twMerge(
          clsx(
            "border-b-4 pb-1 ",
            { "border-indigo-500": props.active },
            { "border-transparent ": !props.active }
          )
        )}
      >
        {children}
      </span>
    </button>
  );
}
