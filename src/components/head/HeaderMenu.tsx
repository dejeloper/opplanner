import { HeaderMenuItems } from "./HeaderMenuItems";

export function HeaderMenu() {
  return (
    <ul className="flex justity-start items-center ml-8">
      <li>
        <HeaderMenuItems>Inicio</HeaderMenuItems>
      </li>
      <li>
        <HeaderMenuItems active={true}>Proyectos</HeaderMenuItems>
      </li>
      <li>
        <HeaderMenuItems>Planeación</HeaderMenuItems>
      </li>
      <li>
        <HeaderMenuItems>Equipo</HeaderMenuItems>
      </li>
      <li>
        <HeaderMenuItems>Calendario</HeaderMenuItems>
      </li>
    </ul>
  );
}
