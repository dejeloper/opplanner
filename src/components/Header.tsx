import { HeaderLogo, HeaderNav } from "./head";

export function Header() {
  return (
    <section className="flex items-center border-b border-black/10 w-full h-[60px]">
      <div className="container flex items-center px-3 mx-auto max-w-[1480px]">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </section>
  );
}
