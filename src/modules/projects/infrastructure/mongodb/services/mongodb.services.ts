import {
  ProjectEntity,
  ProjectInputType,
  ProjectUpdateType,
  mapperToCreateDTO,
  mapperToEntity,
  mapperToUpdateDTO,
} from "../../../domain";
import { ProjectModel } from "../models/project.schema";

export const createProjectService = async (
  project: ProjectInputType
): Promise<ProjectEntity> => {
  const projectDTO = mapperToCreateDTO(project);
  const createdProject = await ProjectModel.create(projectDTO);
  return mapperToEntity(createdProject);
};

export const updateProjectService = async (
  id: string,
  project: ProjectUpdateType
): Promise<ProjectEntity> => {
  const projectDTO = mapperToUpdateDTO(project);
  const updatedProject = await ProjectModel.findByIdAndUpdate(id, projectDTO, {
    new: true,
  });
  return mapperToEntity(updatedProject);
};

export const deleteProjectService = async (id: string): Promise<void> => {
  await ProjectModel.findByIdAndDelete(id);
};

export const getProjectByIdService = async (
  id: string
): Promise<ProjectEntity> => {
  const project = await ProjectModel.findByIdAndDelete(id);
  return mapperToEntity(project);
};

export const getProjectsService = async (): Promise<ProjectEntity[]> => {
  const projects = await ProjectModel.find();
  return projects.map((project) => mapperToEntity(project));
};
