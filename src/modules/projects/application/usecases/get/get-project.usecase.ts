import { ProjectEntity } from "../../../domain/entities/project.entity";
import { ProjectRepository } from "../../../domain/repositories/project.repository";

type GetProjectRepository = Pick<ProjectRepository, "findById">;

export const getProjectUseCase =
  (projectRepository: GetProjectRepository) =>
  async (projectId: string): Promise<ProjectEntity | null> =>
    await projectRepository.findById(projectId);
