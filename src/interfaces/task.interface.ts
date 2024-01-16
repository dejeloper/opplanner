export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export type TaskStatus = "backlog" | "sprint" | "dev" | "testing" | "done";
