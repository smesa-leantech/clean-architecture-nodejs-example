import { Project } from '../../domain/project.entity';
import { ProjectRepository } from '../../domain/project.repository';
import { ProjectService } from '../../domain/project.service';

describe('ProjectService', () => {
  let projectRepository: ProjectRepository;
  let projectService: ProjectService;

  beforeEach(() => {
    projectRepository = {
      create: jest.fn(),
      delete: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
    };
    projectService = new ProjectService(projectRepository);
  });

  describe('createProject', () => {
    it('should create a project', async () => {
      const projectInput = { name: 'Project 1', description: 'Description 1' };
      const project = new Project(projectInput);
      projectRepository.create.mockResolvedValue(project);

      const result = await projectService.createProject(projectInput);

      expect(projectRepository.create).toHaveBeenCalledWith(projectInput);
      expect(result).toEqual(project);
    });
  });

  describe('deleteProject', () => {
    it('should delete a project', async () => {
      const projectId = '123';
      projectRepository.delete.mockResolvedValue(true);

      const result = await projectService.deleteProject(projectId);

      expect(projectRepository.delete).toHaveBeenCalledWith(projectId);
      expect(result).toEqual(true);
    });
  });

  describe('getProject', () => {
    it('should get a project', async () => {
      const projectId = '123';
      const project = new Project({ id: projectId, name: 'Project 1', description: 'Description 1' });
      projectRepository.findById.mockResolvedValue(project);

      const result = await projectService.getProject(projectId);

      expect(projectRepository.findById).toHaveBeenCalledWith(projectId);
      expect(result).toEqual(project);
    });
  });

  describe('getProjects', () => {
    it('should get all projects', async () => {
      const projects = [
        new Project({ id: '1', name: 'Project 1', description: 'Description 1' }),
        new Project({ id: '2', name: 'Project 2', description: 'Description 2' }),
      ];
      projectRepository.findAll.mockResolvedValue(projects);

      const result = await projectService.getProjects();

      expect(projectRepository.findAll).toHaveBeenCalled();
      expect(result).toEqual(projects);
    });
  });

  describe('updateProject', () => {
    it('should update a project', async () => {
      const projectId = '123';
      const projectInput = { name: 'Project 1', description: 'Description 1' };
      const project = new Project({ id: projectId, ...projectInput });
      projectRepository.update.mockResolvedValue(project);

      const result = await projectService.updateProject(projectId, projectInput);

      expect(projectRepository.update).toHaveBeenCalledWith(projectId, projectInput);
      expect(result).toEqual(project);
    });
  });
});