import { Request, Response } from "express";

import {
  ProjectRepository,
  mapperToProjectInputType,
  mapperToProjectUpdateType,
} from "../../domain";

import {
  createProjectUseCase,
  deleteProjectUseCase,
  getProjectUseCase,
  getProjectsUseCase,
  updateProjectUseCase,
} from "../../application/usecases";

export interface IProjectController {
  create: (req: Request, res: Response) => Promise<void>;
  delete: (req: Request, res: Response) => Promise<void>;
  get: (req: Request, res: Response) => Promise<void>;
  getAll: (req: Request, res: Response) => Promise<void>;
  update: (req: Request, res: Response) => Promise<void>;
}

export const ProjectController = (
  repository: ProjectRepository
): IProjectController => {
  const create = async (req: Request, res: Response) => {
    try {
      const projectToCreate = mapperToProjectInputType(req.body);
      const creationResponse = await createProjectUseCase({
        create: repository.create,
      })(projectToCreate);
      res.status(201).json(creationResponse);
    } catch (error: unknown) {
      res.status(400).json({ message: Error((error as Error).message) });
    }
  };

  const _delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await deleteProjectUseCase({
        delete: repository.delete,
      })(id);
      res.status(204).send();
    } catch (error: unknown) {
      res.status(400).json({ message: Error((error as Error).message) });
    }
  };

  const get = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const project = await getProjectUseCase({
        findById: repository.findById,
      })(id);
      res.status(200).json(project);
    } catch (error: unknown) {
      res.status(400).json({ message: Error((error as Error).message) });
    }
  };

  const getAll = async (req: Request, res: Response) => {
    try {
      const projects = await getProjectsUseCase({
        findAll: repository.findAll,
      })();
      res.status(200).json(projects);
    } catch (error: unknown) {
      res.status(400).json({ message: Error((error as Error).message) });
    }
  };

  const update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const projectUpdate = mapperToProjectUpdateType(req.body);
      const updateResponse = await updateProjectUseCase({
        findById: repository.findById,
        update: repository.update,
      })(id, projectUpdate);
      res.status(200).json(updateResponse);
    } catch (error: unknown) {
      res.status(400).json({ message: Error((error as Error).message) });
    }
  };

  return {
    create,
    delete: _delete,
    get,
    getAll,
    update,
  };
};
