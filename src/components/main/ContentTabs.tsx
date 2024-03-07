import { BoardTasks } from "../task/BoardTasks";
import { TabButton } from "../ui/TabButton";

export function ContentTabs() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex tabs-header border-b mb-4">
        <ul className="flex flex-row">
          <li>
            <TabButton active>Overview</TabButton>
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
      </div>

      <div className="tabs-body flex flex-1 mt-5">
        <BoardTasks />
      </div>
    </div>
  );
}
