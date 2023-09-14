import { ProjectUpdateType } from "../../../domain";
import { ProjectRepository } from "../../../domain/ports/project.repository";

type UpdateProjectsRepository = Pick<ProjectRepository, "findById" | "update">;

export const updateProjectUseCase =
  (projectRepository: UpdateProjectsRepository) =>
  async (id: string, projectUpdate: ProjectUpdateType) => {
    const project = await projectRepository.findById(id);

    if (!project) {
      throw new Error("Project not found");
    }

    return await projectRepository.update(id, projectUpdate);
  };
