import React from "react";
import { TasksTable } from "../ui/TasksTable";
import { useQuery } from "@tanstack/react-query";
import { ApiQueryKeys } from "../../../config/api";
import { getTasks } from "../api/tasks.api";

export const TasksListPage: React.FC = () => {
  const { data: tasks, isPending } = useQuery({
    queryKey: [ApiQueryKeys.Tasks],
    queryFn: getTasks,
  });

  return <TasksTable tasks={tasks} />;
};
