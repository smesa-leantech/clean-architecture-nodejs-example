import { ProjectEntity } from "../entities/project.entity";
import { ProjectInputType, ProjectUpdateType } from "../types/project.types";

export interface ProjectRepository {
  create(project: ProjectInputType): Promise<ProjectEntity>;
  findById(id: string): Promise<ProjectEntity | null>;
  findAll(): Promise<ProjectEntity[]>;
  update(id: string, project: ProjectUpdateType): Promise<ProjectEntity>;
  delete(id: string): Promise<void>;
}
