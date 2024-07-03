import { Task, TasksResponse } from "../model/task";

export const mapTasksResponseToTasks = (response: TasksResponse[]): Task[] => {
  if (!response) {
    return [];
  }

  return response.map((task) => ({
    id: task.id,
    title: task.title,
    content: task.content,
    project: task.project?.name,
    priority: task.priority,
  }));
};
