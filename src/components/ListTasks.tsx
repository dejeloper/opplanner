import type { Task, TaskStatus } from "@/interfaces";
import { TaskCard } from "./TaskCard";

interface Props {
  title: string;
  tasks: Task[];
  value?: TaskStatus;
}

export function ListTask({ title, tasks }: Props) {
  return (
    <div className="bg-two mx-4 rounded py-2 px-4">
      <h2 className="font-semibold text-three select-none">{title}</h2>
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <div className="flex items-center justify-center p-2 gap-2 select-none">
            <p className="font-bold text-three">No hay tareas</p>
          </div>
        )}
      </div>
    </div>
  );
}
