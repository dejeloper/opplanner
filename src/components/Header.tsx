import { HeaderLogo, HeaderNav } from "./head";
import { HeaderMenu } from "./head/HeaderMenu";

export function Header() {
  return (
    <section className="flex items-center border-b border-black/10 w-full h-[60px]">
      <div className="container flex justify-between items-center px-3 mx-auto max-w-[1480px]">
        <div className="flex items-center">
          <HeaderLogo />
          <HeaderMenu />
        </div>
        <div className="flex w-72">
          <HeaderNav />
        </div>
      </div>
    </section>
  );
}
