import { connectToMongoDB } from "../../../../../app/database/mongodb/mongodb.connection";
import {
  ProjectEntity,
  ProjectInputType,
  ProjectRepository,
  ProjectUpdateType,
} from "../../../domain";

import {
  createProjectService,
  deleteProjectService,
  getProjectByIdService,
  getProjectsService,
  updateProjectService,
} from "../services/mongodb.services";

export const MongoDBProjectRepositoryImpl = (): ProjectRepository => {
  
  connectToMongoDB();

  const create = async (project: ProjectInputType): Promise<ProjectEntity> =>
    await createProjectService(project);

  const findById = async (id: string): Promise<ProjectEntity> =>
    await getProjectByIdService(id);

  const findAll = async (): Promise<ProjectEntity[]> =>
    await getProjectsService();

  const update = async (
    id: string,
    project: ProjectUpdateType
  ): Promise<ProjectEntity> => await updateProjectService(id, project);

  const _delete = async (id: string): Promise<void> =>
    await deleteProjectService(id);

  return {
    create,
    findById,
    findAll,
    update,
    delete: _delete,
  };
};
