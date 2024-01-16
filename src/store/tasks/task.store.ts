import type { Task, TaskStatus } from "@/interfaces";
import { StateCreator, create } from "zustand";

interface TaskStore {
  draggingTaskId?: string;
  tasks: Record<string, Task>;
  getTaskByStatus: (status: TaskStatus) => Task[];
}

const storeApiTask: StateCreator<TaskStore> = (set, get) => ({
  draggingTaskId: undefined,
  tasks: {
    task_1: { id: "task_1", title: "Task 1", status: "backlog" },
    task_2: { id: "task_2", title: "Task 2", status: "backlog" },
    task_3: { id: "task_3", title: "Task 3", status: "sprint" },
    task_4: { id: "task_4", title: "Task 4", status: "sprint" },
    task_5: { id: "task_5", title: "Task 5", status: "dev" },
    task_6: { id: "task_6", title: "Task 6", status: "dev" },
    task_7: { id: "task_7", title: "Task 7", status: "testing" },
  },
  getTaskByStatus: (status: TaskStatus) => {
    const tasks = Object.values(get().tasks);
    return tasks.filter((task) => task.status === status);
  },
});

export const useTaskStore = create<TaskStore>()(storeApiTask);
