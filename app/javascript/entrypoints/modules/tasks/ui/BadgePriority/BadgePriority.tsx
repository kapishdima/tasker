import React from "react";
import { Tag } from "primereact/tag";
import { Priority } from "../../model/task";

type BadgePriorityProps = { priority: Priority };

const labels = {
  low: "Низкий",
  medium: "Средний",
  urgent: "Высокий",
};

const colors = {
  low: "success",
  medium: "warning",
  urgent: "danger",
} as const;

export const BadgePriority: React.FC<BadgePriorityProps> = ({ priority }) => {
  return <Tag value={labels[priority]} severity={colors[priority]} />;
};
