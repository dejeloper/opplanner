import { useTaskStore } from "@/store";
import { ListTask } from "./ListTasks";

export function BoardTasks() {
  const backlogTasks = useTaskStore((s) => s.getTaskByStatus("backlog"));
  const sprintTasks = useTaskStore((s) => s.getTaskByStatus("sprint"));
  const devTasks = useTaskStore((s) => s.getTaskByStatus("dev"));
  const testingTasks = useTaskStore((s) => s.getTaskByStatus("testing"));
  const doneTasks = useTaskStore((s) => s.getTaskByStatus("done"));

  return (
    <div className="flex flex-1">
      <ListTask title="Backlog" tasks={backlogTasks} status="backlog" />
      <ListTask title="Sprint" tasks={sprintTasks} status="sprint" />
      <ListTask title="In Progress" tasks={devTasks} status="dev" />
      <ListTask title="Testing" tasks={testingTasks} status="testing" />
      <ListTask title="Done" tasks={doneTasks} status="done" />
    </div>
  );
}
