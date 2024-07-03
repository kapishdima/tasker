import { http } from "../../../app/http";
import { ApiRoutes } from "../../../config/api";
import { mapTasksResponseToTasks } from "../mapper/";
import { TasksResponse } from "../model/task";

export const getTasks = async () => {
  const { data } = await http.get<TasksResponse[]>(ApiRoutes.Tasks);

  if (!data) {
    return null;
  }

  return mapTasksResponseToTasks(data);
};
