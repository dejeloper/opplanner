import { RiMenuFill } from "react-icons/ri";
import { Task } from "@/interfaces";
import { useTaskStore } from "@/store";

interface Props {
  task: Task;
}

export function TaskCard({ task }: Props) {
  const setDraggingTaskId = useTaskStore((s) => s.setDraggingTaskId);
  const removeDraggingTaskId = useTaskStore((s) => s.removeDraggingTaskId);

  return (
    <div
      draggable={true}
      onDragStart={() => setDraggingTaskId(task.id)}
      onDragEnd={() => removeDraggingTaskId()}
      className="flex justify-between items-center p-2 cursor-pointer"
    >
      <div className="flex justify-center items-center gap-2">
        <h3 className="font-medium ">{task.title}</h3>
      </div>
      <span className="h-6 w-6">
        <RiMenuFill />
      </span>
    </div>
  );
}
