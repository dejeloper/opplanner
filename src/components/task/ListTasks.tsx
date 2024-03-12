import { TaskCard } from "./TaskCard";
import type { Task, TaskStatus } from "@/interfaces";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RiAddFill } from "react-icons/ri";
import { useTasks } from "@/hooks/tasks/useTasks";

interface Props {
  title: string;
  tasks: Task[];
  status: TaskStatus;
}

export function ListTask({ title, status, tasks }: Props) {
  const {
    isDragging,
    taskCount,
    onDragOver,
    handleAddTask,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useTasks({ status });

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={twMerge(
        clsx("bg-[#f4f5f8] mx-2 rounded-lg border-4", {
          "border-transparent": !isDragging,
          "border-gris border-dotted": isDragging,
          "border-success border-dotted": isDragging && onDragOver,
        })
      )}
    >
      <div className="py-2 px-2 relative flex flex-row justify-between">
        <div className="flex justify-center items-center mb-2">
          <h2 className="ml-2 font-semibold select-none">
            {title}: {taskCount}
          </h2>
        </div>
        <button
          className="flex items-center justify-center rounded-md border border-[#0000001a] text-black bg-white hover:bg-[#1b232c] hover:text-white h-6 w-6 mr-1"
          onClick={handleAddTask}
        >
          <RiAddFill />
        </button>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-full ">
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
