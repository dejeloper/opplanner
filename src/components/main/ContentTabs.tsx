import { RiFilter2Line, RiFullscreenLine } from "react-icons/ri";
import { BoardTasks } from "../task/BoardTasks";
import { ButtonDisabled } from "../ui/ButtonDisabled";
import { TabButton } from "../ui/TabButton";

export function ContentTabs() {
  const tabs = [
    {
      id: 1,
      name: "General",
      active: true,
    },
    {
      id: 2,
      name: "Tareas",
      active: false,
    },
    {
      id: 3,
      name: "Categorías",
      active: false,
    },
    {
      id: 4,
      name: "Mensajes",
      active: false,
    },
    {
      id: 5,
      name: "Archivos",
      active: false,
    },
    {
      id: 6,
      name: "Tiempos",
      active: false,
    },
    {
      id: 7,
      name: "Comentarios",
      active: false,
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex tabs-header justify-between border-b mb-4">
        <ul className="flex flex-row flex-wrap gap-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <TabButton active={tab.active}>{tab.name}</TabButton>
            </li>
          ))}
        </ul>

        <div className="md:flex gap-3 hidden">
          <ButtonDisabled>
            <span className="text-lg lg:mr-2" title="Pantalla Completa">
              <RiFullscreenLine />
            </span>
            <span className="hidden lg:block">Pantalla Completa</span>
          </ButtonDisabled>
          <ButtonDisabled>
            <span className="text-lg lg:mr-2" title="Filtros">
              <RiFilter2Line />
            </span>
            <span className="hidden lg:block">Filtros</span>
          </ButtonDisabled>
        </div>
      </div>

      <div className="tabs-body flex flex-1 mt-5 justify-center w-full">
        <BoardTasks />
      </div>
    </div>
  );
}
