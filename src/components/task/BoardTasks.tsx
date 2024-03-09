import { useTaskStore } from "@/store";
import { ListTask } from "./ListTasks";

export function BoardTasks() {
  const backlogTasks = useTaskStore((s) => s.getTaskByStatus("backlog"));
  const sprintTasks = useTaskStore((s) => s.getTaskByStatus("sprint"));
  const devTasks = useTaskStore((s) => s.getTaskByStatus("dev"));
  const testingTasks = useTaskStore((s) => s.getTaskByStatus("testing"));
  const doneTasks = useTaskStore((s) => s.getTaskByStatus("done"));

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-1 w-full">
      <ListTask title="Backlog" tasks={backlogTasks} status="backlog" />
      <ListTask title="Sprint" tasks={sprintTasks} status="sprint" />
      <ListTask title="In Progress" tasks={devTasks} status="dev" />
      <ListTask title="Testing" tasks={testingTasks} status="testing" />
      <ListTask title="Done" tasks={doneTasks} status="done" />
    </div>
  );
}
