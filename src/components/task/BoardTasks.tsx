import { useTaskStore } from "@/store";
import { ListTask } from "./ListTasks";

export function BoardTasks() {
  const waitingTasks = useTaskStore((s) => s.getTaskByStatus("waiting"));
  const processTasks = useTaskStore((s) => s.getTaskByStatus("process"));
  const testingTasks = useTaskStore((s) => s.getTaskByStatus("testing"));
  const doneTasks = useTaskStore((s) => s.getTaskByStatus("done"));

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-1 w-full">
      <ListTask title="En Espera" tasks={waitingTasks} status="waiting" />
      <ListTask title="En Proceso" tasks={processTasks} status="process" />
      <ListTask title="En Prueba" tasks={testingTasks} status="testing" />
      <ListTask title="Finalizado" tasks={doneTasks} status="done" />
    </div>
  );
}
