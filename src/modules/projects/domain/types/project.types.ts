import { ProjectEntity } from "../entities/project.entity";

export type NewProjectType = Omit<ProjectEntity, "id">;

export type ProjectInputType = {
  name: string;
  description: string;
};

export type ProjectUpdateType = {
  name: string;
  description: string;
  createdAt: Date;
};
