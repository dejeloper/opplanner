import { useTaskStore } from "@/store";
import { ListTask } from "./ListTasks";

export function Content() {
  const backlogTasks = useTaskStore((state) =>
    state.getTaskByStatus("backlog")
  );

  const sprintTasks = useTaskStore((state) => state.getTaskByStatus("sprint"));
  const devTasks = useTaskStore((state) => state.getTaskByStatus("dev"));
  const testingTasks = useTaskStore((state) =>
    state.getTaskByStatus("testing")
  );
  const doneTasks = useTaskStore((state) => state.getTaskByStatus("done"));

  return (
    <>
      <div className="grid grid-flow-row md:grid-flow-col w-full gap-4 mt-4 bg-two h-full">
        <ListTask title="Backlog" tasks={backlogTasks} value="backlog" />
        <ListTask title="Sprint" tasks={sprintTasks} value="sprint" />
        <ListTask title="In Progress" tasks={devTasks} value="dev" />
        <ListTask title="Testing" tasks={testingTasks} value="testing" />
        <ListTask title="Done" tasks={doneTasks} value="done" />
      </div>
    </>
  );
}
