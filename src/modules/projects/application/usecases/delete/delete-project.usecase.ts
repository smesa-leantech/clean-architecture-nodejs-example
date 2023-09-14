import { ProjectRepository } from "../../../domain/repositories/project.repository";

type DeleteProjectRepository = Pick<ProjectRepository, "delete">;

export const deleteProjectUseCase =
  (projectRepository: DeleteProjectRepository) =>
  async (id: string): Promise<void> =>
    await projectRepository.delete(id);
