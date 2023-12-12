import { atom } from "recoil";
import type { taskObj } from "@/components/button";

// tasks
export const formData = atom({
  key: "formData",
  default: [] as taskObj[],
});

// finished tasks
export const finishedTasks = atom({
  key: "finishedTasks",
  default: [] as taskObj[],
});

// # of total tasks
export const totalTasks = atom({
  key: "totalTasks",
  default: 0,
});
