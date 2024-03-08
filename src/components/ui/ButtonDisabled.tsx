interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonDisabled({ children, ...props }: Props) {
  return (
    <button
      className="flex items-center rounded-md bg-transparent border border-[#00000033] text-[#4a4e55] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:border-[#808997] mb-2"
      {...props}
    >
      {children}
    </button>
  );
}
