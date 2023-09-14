import { updateProject } from '../../src/projects/application/update-project';
import { ProjectService } from '../../src/projects/domain/project.service';
import { Project } from '../../src/projects/domain/project.entity';

describe('updateProject', () => {
  it('should update a project entity in the database', async () => {
    // Arrange
    const projectService = new ProjectService();
    const project = new Project();
    project.id = '1';
    project.name = 'Project 1';
    project.description = 'Description 1';
    project.createdAt = new Date();
    project.updatedAt = new Date();
    const updatedProject = new Project();
    updatedProject.id = '1';
    updatedProject.name = 'Project 1 Updated';
    updatedProject.description = 'Description 1 Updated';
    updatedProject.createdAt = new Date();
    updatedProject.updatedAt = new Date();
    jest.spyOn(projectService, 'getProject').mockResolvedValue(project);
    jest.spyOn(projectService, 'updateProject').mockResolvedValue(updatedProject);

    // Act
    const result = await updateProject('1', {
      name: 'Project 1 Updated',
      description: 'Description 1 Updated',
    });

    // Assert
    expect(result).toEqual(updatedProject);
    expect(projectService.getProject).toHaveBeenCalledWith('1');
    expect(projectService.updateProject).toHaveBeenCalledWith(project, {
      name: 'Project 1 Updated',
      description: 'Description 1 Updated',
    });
  });
});