import { ProjectDTO, ProjectEntity } from "../entities/project.entity";
import {
  ProjectInputType,
  NewProjectType,
  ProjectUpdateType,
} from "../types/project.types";

export const createProject = ({
  name,
  description,
}: ProjectInputType): NewProjectType => {
  const createdAt = new Date();
  const updatedAt = new Date();
  return { name, description, createdAt, updatedAt };
};

export const updateProject = (
  project: ProjectEntity,
  { name, description }: ProjectUpdateType
): ProjectEntity => {
  const updatedAt = new Date();
  return {
    ...project,
    name: name ?? project.name,
    description: description ?? project.description,
    updatedAt,
  };
};

export const mapperToProjectInputType = (
  requestInfo: any
): ProjectInputType => {
  try {
    const { name, description } = requestInfo;
    return { name, description };
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const mapperToProjectUpdateType = (
  requestInfo: any
): ProjectUpdateType => {
  try {
    const { name, description, createdAt } = requestInfo;
    return { name, description, createdAt };
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const mapperToCreateDTO = (project: ProjectInputType): ProjectDTO => ({
  name: project.name,
  description: project.description,
  createdAt: new Date(),
  updatedAt: new Date(),
});

export const mapperToUpdateDTO = (project: ProjectUpdateType): ProjectDTO => ({
  name: project.name,
  description: project.description,
  createdAt: project.createdAt,
  updatedAt: new Date(),
});
export const mapperToEntity = (project: any): ProjectEntity => ({
  id: project._id,
  name: project.name || "",
  description: project.description || "",
  createdAt: project.createdAt,
  updatedAt: project.updatedAt,
});
