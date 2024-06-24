import { MenuItem as PrimeMenuItem } from "primereact/menuitem";

export type MenuItem = PrimeMenuItem & {
  severity?: "secondary" | "success" | "info" | "warning" | "danger" | "help";
  items?: MenuItem[];
};
export type MenuConfig = MenuItem[];

export const menu: MenuItem[] = [
  {
    label: "Задачи",

    items: [
      {
        label: "Новая задача",
        icon: "pi pi-plus",
        severity: "info",
      },
      { label: "Все задачи" },
      { label: "Текущие задачи" },
      { label: "На согласовании" },
    ],
  },
  {
    label: "Проекты",
    items: [
      {
        label: "Новый проект",
        icon: "pi pi-plus",
        severity: "info",
      },
      { label: "Varflow" },
      { label: "Indel" },
      { label: "Indel Cosm" },
      { label: "Chempha" },
      { label: "Lucky Cleaning" },
      { label: "Just Sell" },
      { label: "Quincy" },
      { label: "Внутренние задачи" },
      { label: "Lucky Cleaning" },
      { label: "Just Sell" },
      { label: "Quincy" },
      { label: "Внутренние задачи" },
    ],
  },
];
