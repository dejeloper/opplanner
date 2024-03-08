import { RiFilter2Line, RiFullscreenLine } from "react-icons/ri";
import { BoardTasks } from "../task/BoardTasks";
import { ButtonDisabled } from "../ui/ButtonDisabled";
import { TabButton } from "../ui/TabButton";

export function ContentTabs() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex tabs-header justify-between border-b mb-4">
        <ul className="flex flex-row">
          <li>
            <TabButton active={true}>Overview</TabButton>
          </li>
          <li>
            <TabButton>Tasks</TabButton>
          </li>
          <li>
            <TabButton>Milestones</TabButton>
          </li>
          <li>
            <TabButton>Messages</TabButton>
          </li>
          <li>
            <TabButton>Files</TabButton>
          </li>
          <li>
            <TabButton>Time</TabButton>
          </li>
          <li>
            <TabButton>Comments</TabButton>
          </li>
        </ul>

        <div className="flex gap-3">
          <ButtonDisabled>
            <span className="mr-2 text-lg">
              <RiFullscreenLine />
            </span>
            Pantalla Completa
          </ButtonDisabled>
          <ButtonDisabled>
            <span className="mr-2 text-lg">
              <RiFilter2Line />
            </span>
            Filtro
          </ButtonDisabled>
        </div>
      </div>

      <div className="tabs-body flex flex-1 mt-5">
        <BoardTasks />
      </div>
    </div>
  );
}
