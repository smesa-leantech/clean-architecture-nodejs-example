import { Request, Response } from 'express';
import { ProjectController } from '../../../../projects/infrastructure/presentation/project.controller';
import { ProjectMapper } from '../../../../projects/infrastructure/presentation/project.mapper';
import { ProjectService } from '../../../../projects/domain/project.service';
import { MongoDBProjectRepository } from '../../../../projects/infrastructure/mongodb/mongodb.repository';
import { connectToMongoDB } from '../../../../infrastructure/database/mongodb/mongodb.connection';

describe('ProjectController', () => {
  let projectController: ProjectController;

  beforeAll(async () => {
    await connectToMongoDB();
    const projectRepository = new MongoDBProjectRepository();
    const projectService = new ProjectService(projectRepository);
    const projectMapper = new ProjectMapper();
    projectController = new ProjectController(projectService, projectMapper);
  });

  describe('createProject', () => {
    it('should create a new project', async () => {
      const req = {
        body: {
          name: 'Test Project',
          description: 'This is a test project',
        },
      } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await projectController.createProject(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('getProject', () => {
    it('should get a project by id', async () => {
      const projectId = '123456789012345678901234';
      const req = {
        params: {
          id: projectId,
        },
      } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await projectController.getProject(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('getProjects', () => {
    it('should get all projects', async () => {
      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await projectController.getProjects(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('updateProject', () => {
    it('should update a project by id', async () => {
      const projectId = '123456789012345678901234';
      const req = {
        params: {
          id: projectId,
        },
        body: {
          name: 'Updated Test Project',
          description: 'This is an updated test project',
        },
      } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await projectController.updateProject(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('deleteProject', () => {
    it('should delete a project by id', async () => {
      const projectId = '123456789012345678901234';
      const req = {
        params: {
          id: projectId,
        },
      } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await projectController.deleteProject(req, res);

      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.json).toHaveBeenCalled();
    });
  });
});