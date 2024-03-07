import {
  IconApps,
  IconArrowDown,
  IconNotification,
  IconProfile,
  IconSearch,
} from "../icons";

export function HeaderNav() {
  return (
    <div className="navbar flex justify-center items-center gap-4">
      <IconSearch className="w-8 h-8" />
      <IconApps className="w-8 h-8" />
      <IconNotification className="w-8 h-8" />
      <div className="flex">
        <IconProfile className="w-8 h-8" />
        <IconArrowDown className="w-8 h-8" />
      </div>
    </div>
  );
}
