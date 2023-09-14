import { getProjects } from '../../../projects/application/get-projects';
import { ProjectRepository } from '../../../projects/domain/project.repository';
import { Project } from '../../../projects/domain/project.entity';

describe('getProjects', () => {
  it('should return an array of projects', async () => {
    // Arrange
    const projectRepository: ProjectRepository = {
      findAll: jest.fn().mockResolvedValue([
        new Project('1', 'Project 1', 'Description 1'),
        new Project('2', 'Project 2', 'Description 2'),
      ]),
    };

    // Act
    const result = await getProjects(projectRepository);

    // Assert
    expect(result).toEqual([
      { id: '1', name: 'Project 1', description: 'Description 1' },
      { id: '2', name: 'Project 2', description: 'Description 2' },
    ]);
  });
});