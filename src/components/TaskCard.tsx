import { Task } from "@/interfaces";

interface Props {
  task: Task;
}

export function TaskCard({ task }: Props) {
  return (
    <div className="flex justify-between">
      <h3 className="font-medium">{task.title}</h3>
      <span>✅</span>
    </div>
  );
}
