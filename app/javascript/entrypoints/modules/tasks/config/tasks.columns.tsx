import { TableColumn } from "../../../shared/ui/table";

import { BadgePriority } from "../ui/BadgePriority/BadgePriority";
import { Task } from "../model/task";

export const TasksColumns: TableColumn[] = [
  { field: "id", header: "ID" },
  { field: "title", header: "Название" },
  { field: "content", header: "Описание" },
  { field: "project", header: "Проект" },
  {
    field: "priority",
    header: "Приоритет",
    body(task: Task, options) {
      return <BadgePriority priority={task.priority} />;
    },
  },
];
