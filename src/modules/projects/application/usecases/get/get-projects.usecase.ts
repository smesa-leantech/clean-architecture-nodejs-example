import { ProjectEntity } from "../../../domain/entities/project.entity";
import { ProjectRepository } from "../../../domain/repositories/project.repository";

type GetProjectsRepository = Pick<ProjectRepository, "findAll">;

export const getProjectsUseCase =
  (projectRepository: GetProjectsRepository) =>
  async (): Promise<ProjectEntity[]> =>
    await projectRepository.findAll();
