import Path from "@/routes/paths";

export type ProfileContextType = {
  currentPath: string;
  updatePath: (newPath: string) => void;
};
