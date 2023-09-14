import {
  ProjectEntity,
  ProjectInputType,
  ProjectRepository,
  ProjectUpdateType,
} from "../../../domain";

export const PostegresqlProjectRepositoryImpl = (): ProjectRepository => {
  const create = async (project: ProjectInputType): Promise<ProjectEntity> => {
    throw new Error("Not implemented");
  };

  const findById = async (id: string): Promise<ProjectEntity> => {
    throw new Error("Not implemented");
  };

  const findAll = async (): Promise<ProjectEntity[]> => {
    throw new Error("Not implemented");
  };

  const update = async (
    id: string,
    project: ProjectUpdateType
  ): Promise<ProjectEntity> => {
    throw new Error("Not implemented");
  };

  const _delete = async (id: string): Promise<void> => {
    throw new Error("Not implemented");
  };

  return {
    create,
    findById,
    findAll,
    update,
    delete: _delete,
  };
};
