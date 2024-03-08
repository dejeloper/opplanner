import { HeaderMenuItems } from "./HeaderMenuItems";

export function HeaderMenu() {
  return (
    <ul className="flex justity-start items-center ml-8">
      <li>
        <HeaderMenuItems>Starts</HeaderMenuItems>
      </li>
      <li>
        <HeaderMenuItems active={true}>Projects</HeaderMenuItems>
      </li>
      <li>
        <HeaderMenuItems>Planning</HeaderMenuItems>
      </li>
      <li>
        <HeaderMenuItems>Teams</HeaderMenuItems>
      </li>
      <li>
        <HeaderMenuItems>Calendar</HeaderMenuItems>
      </li>
    </ul>
  );
}
