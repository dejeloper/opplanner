import { DragEvent, useState } from "react";
import { useTaskStore } from "@/store";
import Swal from "sweetalert2";
import { TaskStatus } from "@/interfaces";

interface Options {
  status: TaskStatus;
}

export const useTasks = ({ status }: Options) => {
  const isDragging = useTaskStore((s) => !!s.draggingTaskId);
  const onTaskDrop = useTaskStore((s) => s.onTaskDrop);
  const addTask = useTaskStore((s) => s.addTask);
  const totalTasks = useTaskStore((s) => s.getTaskByStatus(status));
  const taskCount = Object.values(totalTasks).length;

  const [onDragOver, setOnDragOver] = useState(false);

  const handleAddTask = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: "Agregar tarea",
      input: "text",
      inputLabel: "Nombre de la tarea",
      inputPlaceholder: "Ingrese el nombre de la tarea",
      showCancelButton: true,
      inputValidator: (value: string) => {
        if (!value) {
          return "El nombre de la tarea es requerido";
        }
      },
    });

    if (!isConfirmed) return;
    addTask(value, status);
  };

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
    onTaskDrop(status);
  };

  return {
    isDragging,
    taskCount,
    onDragOver,
    handleAddTask,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
