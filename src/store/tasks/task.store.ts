import { StateCreator, create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import type { Task, TaskStatus } from "@/interfaces";
import { devtools } from "zustand/middleware";

interface TaskStore {
  draggingTaskId?: string;
  tasks: Record<string, Task>;
  getTaskByStatus: (status: TaskStatus) => Task[];
  addTask: (title: string, status: TaskStatus) => void;
  setDraggingTaskId: (taskId: string) => void;
  removeDraggingTaskId: () => void;
  changeTaskStatus: (taskId: string, status: TaskStatus) => void;
  onTaskDrop: (status: TaskStatus) => void;
}

const storeApiTask: StateCreator<TaskStore> = (set, get) => ({
  draggingTaskId: undefined,
  tasks: {
    task_1: { id: "task_1", title: "Task 1", status: "waiting" },
    task_2: { id: "task_2", title: "Task 2", status: "waiting" },
    task_3: { id: "task_3", title: "Task 3", status: "waiting" },
    task_4: { id: "task_4", title: "Task 4", status: "process" },
    task_5: { id: "task_5", title: "Task 5", status: "process" },
    task_6: { id: "task_6", title: "Task 6", status: "testing" },
    task_7: { id: "task_7", title: "Task 7", status: "done" },
  },
  getTaskByStatus: (status: TaskStatus) => {
    const tasks = Object.values(get().tasks);
    return tasks.filter((task) => task.status === status);
  },
  addTask: (title: string, status: TaskStatus) => {
    const newTask = { id: uuidv4(), title, status };

    set((state) => ({
      tasks: {
        ...state.tasks,
        [newTask.id]: newTask,
      },
    }));
  },
  setDraggingTaskId: (taskId: string) => {
    set({ draggingTaskId: taskId });
  },
  removeDraggingTaskId: () => {
    set({ draggingTaskId: undefined });
  },
  changeTaskStatus: (taskId: string, status: TaskStatus) => {
    const task = get().tasks[taskId];
    task.status = status;
    set((state) => ({
      tasks: {
        ...state.tasks,
        [taskId]: task,
      },
    }));
  },
  onTaskDrop: (status: TaskStatus) => {
    const taskId = get().draggingTaskId;
    if (!taskId) return;

    get().changeTaskStatus(taskId, status);
    get().removeDraggingTaskId();
  },
});

export const useTaskStore = create<TaskStore>()(devtools(storeApiTask));
