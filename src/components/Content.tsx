import { useTaskStore } from "@/store";
import { ListTask } from "./ListTasks";

export function Content() {
  const backlogTasks = useTaskStore((s) => s.getTaskByStatus("backlog"));
  const sprintTasks = useTaskStore((s) => s.getTaskByStatus("sprint"));
  const devTasks = useTaskStore((s) => s.getTaskByStatus("dev"));
  const testingTasks = useTaskStore((s) => s.getTaskByStatus("testing"));
  const doneTasks = useTaskStore((s) => s.getTaskByStatus("done"));

  return (
    <>
      <div className="grid grid-flow-row md:grid-flow-col w-full gap-4 mt-4 h-full">
        <ListTask title="Backlog" tasks={backlogTasks} value="backlog" />
        <ListTask title="Sprint" tasks={sprintTasks} value="sprint" />
        <ListTask title="In Progress" tasks={devTasks} value="dev" />
        <ListTask title="Testing" tasks={testingTasks} value="testing" />
        <ListTask title="Done" tasks={doneTasks} value="done" />
      </div>
    </>
  );
}
