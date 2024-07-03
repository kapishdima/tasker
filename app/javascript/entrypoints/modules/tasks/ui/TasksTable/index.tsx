import React from "react";

import { Table } from "../../../../shared/ui/table";
import { TasksColumns } from "../../config";
import { Task } from "../../model/task";

type TasksTableProps = {
  isLoading?: boolean;
  tasks: Task[] | undefined | null;
};

export const TasksTable: React.FC<TasksTableProps> = ({
  tasks,
  isLoading = false,
}) => {
  if (!tasks) {
    return null;
  }

  return <Table columns={TasksColumns} value={tasks} loading={isLoading} />;
};
