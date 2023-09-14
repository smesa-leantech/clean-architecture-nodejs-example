import { ProjectInputType } from "../../../domain";
import { ProjectEntity } from "../../../domain/entities/project.entity";
import { ProjectRepository } from "../../../domain/ports/project.repository";

type CreateProjectRepository = Pick<ProjectRepository, "create">;

export const createProjectUseCase =
  (projectRepository: CreateProjectRepository) =>
  async (projectInput: ProjectInputType): Promise<ProjectEntity> => 
    await projectRepository.create(projectInput);
