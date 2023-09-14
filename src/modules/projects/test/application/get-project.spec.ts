import { getProject } from '../../src/projects/application/get-project';
import { ProjectRepository } from '../../src/projects/domain/project.repository';
import { Project } from '../../src/projects/domain/project.entity';

describe('getProject', () => {
  const projectRepository: ProjectRepository = {
    getById: jest.fn(),
    getAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const project: Project = {
    id: '1',
    name: 'Project 1',
    description: 'Description 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it('should return a project', async () => {
    projectRepository.getById.mockResolvedValueOnce(project);

    const result = await getProject(project.id, projectRepository);

    expect(result).toEqual(project);
    expect(projectRepository.getById).toHaveBeenCalledWith(project.id);
  });

  it('should throw an error if the project does not exist', async () => {
    projectRepository.getById.mockResolvedValueOnce(undefined);

    await expect(getProject(project.id, projectRepository)).rejects.toThrowError(
      `Project with id ${project.id} not found`,
    );
    expect(projectRepository.getById).toHaveBeenCalledWith(project.id);
  });
});