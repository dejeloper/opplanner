import { RiFilter2Line, RiFullscreenLine, RiMenu2Fill } from "react-icons/ri";
import { BoardTasks } from "../task/BoardTasks";
import { ButtonDisabled } from "../ui/ButtonDisabled";
import { TabButton } from "../ui/TabButton";

export function ContentTabs() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex tabs-header justify-between border-b mb-4">
        <button className="flex sm:hidden items-center rounded-md bg-transparent border border-[#00000033] text-[#4a4e55] px-2 py-2 text-sm font-semibold shadow-sm hover:border-[#808997] mb-2">
          <span className="text-lg lg:mr-2" title="Pantalla Completa">
            <RiMenu2Fill />
          </span>
        </button>

        <ul className="sm:flex hidden flex-row overflow-x-auto gap-2">
          <li>
            <TabButton active={true}>General</TabButton>
          </li>
          <li>
            <TabButton>Tareas</TabButton>
          </li>
          <li>
            <TabButton>Categorías</TabButton>
          </li>
          <li>
            <TabButton>Mensajes</TabButton>
          </li>
          <li>
            <TabButton>Archivos</TabButton>
          </li>
          <li>
            <TabButton>Tiempos</TabButton>
          </li>
          <li>
            <TabButton>Comentarios</TabButton>
          </li>
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
