import { Project } from "../../projects";

export type Task = {
  id: number;
  title: string;
  content: string;
  project: string;
  priority: Priority;
};

export type TasksResponse = {
  id: number;
  title: string;
  content: string;
  project: Project;
  priority: Priority;
};

export type Priority = "low" | "medium" | "urgent";
