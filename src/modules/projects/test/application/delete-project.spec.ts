import { deleteProject } from '../../../projects/application/delete-project';
import { ProjectRepository } from '../../../projects/domain/project.repository';
import { ProjectService } from '../../../projects/domain/project.service';
import { Project } from '../../../projects/domain/project.entity';

describe('deleteProject', () => {
  let projectRepository: ProjectRepository;
  let projectService: ProjectService;

  beforeEach(() => {
    projectRepository = {
      getById: jest.fn(),
      getAll: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    projectService = new ProjectService(projectRepository);
  });

  it('should delete a project', async () => {
    const project: Project = {
      id: '1',
      name: 'Test Project',
      description: 'This is a test project',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    projectRepository.getById.mockResolvedValueOnce(project);
    projectRepository.delete.mockResolvedValueOnce(project);

    const result = await deleteProject('1', projectService);

    expect(projectRepository.getById).toHaveBeenCalledWith('1');
    expect(projectRepository.delete).toHaveBeenCalledWith(project);
    expect(result).toEqual(project);
  });

  it('should throw an error if project does not exist', async () => {
    projectRepository.getById.mockResolvedValueOnce(undefined);

    await expect(deleteProject('1', projectService)).rejects.toThrow(
      'Project not found',
    );
  });
});