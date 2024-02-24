import { DragEvent, useState } from "react";
import { useTaskStore } from "@/store";
import { TaskCard } from "./TaskCard";
import type { Task, TaskStatus } from "@/interfaces";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RiAddCircleFill, RiCheckboxCircleLine } from "react-icons/ri";

interface Props {
  title: string;
  tasks: Task[];
  value: TaskStatus;
}

export function ListTask({ title, value, tasks }: Props) {
  const isDragging = useTaskStore((s) => !!s.draggingTaskId);
  const onTaskDrop = useTaskStore((s) => s.onTaskDrop);

  const [onDragOver, setOnDragOver] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
    onTaskDrop(value);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={twMerge(
        clsx("bg-two mx-2 rounded-xl border-4 border-transparent", {
          "border-gris border-dotted": isDragging,
          "border-success border-dotted": isDragging && onDragOver,
        })
      )}
    >
      <div className="py-2 px-2 relative flex flex-row justify-between">
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center rounded-full bg-gris text-two">
            <RiCheckboxCircleLine />
          </div>
          <h2 className="ml-2 font-semibold text-three select-none">{title}</h2>
        </div>
        <button className="flex items-center justify-center rounded-full text-contrast h-6 w-6 mr-1">
          <RiAddCircleFill />
        </button>
      </div>
      <div className="h-full w-full">
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
