import type { Task, TaskStatus } from "@/interfaces";
import { TaskCard } from "./TaskCard";

interface Props {
  title: string;
  tasks: Task[];
  value?: TaskStatus;
}

export function ListTask({ title, tasks }: Props) {
  return (
    <div className="bg-five text-two mx-4 rounded py-2 px-4">
      <h2 className="font-semibold">{title}</h2>
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <div className="mt-5 flex items-center justify-center p-2">
            <div className="flex items-center justify-center gap-2">
              <p className="text-base font-bold text-navy-700">No hay tareas</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
