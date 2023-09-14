import { createProject } from '../../../projects/application/create-project';
import { ProjectRepository } from './../../domain';
import { ProjectService } from '../../../projects/domain/project.service';
import { ProjectInput } from '../../../projects/domain/project.types';

describe('createProject', () => {
  const projectRepository: ProjectRepository = {
    create: jest.fn(),
    delete: jest.fn(),
    get: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
  };
  const projectService = new ProjectService(projectRepository);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should create a project', async () => {
    const projectInput: ProjectInput = {
      name: 'Test Project',
      description: 'This is a test project',
    };
    const createdProject = {
      id: '1',
      name: 'Test Project',
      description: 'This is a test project',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    (projectRepository.create as jest.Mock).mockResolvedValueOnce(createdProject);

    const result = await createProject(projectInput, projectService);

    expect(projectRepository.create).toHaveBeenCalledWith(projectInput);
    expect(result).toEqual(createdProject);
  });
});