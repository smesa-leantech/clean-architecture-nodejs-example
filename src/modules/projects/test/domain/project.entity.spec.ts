import { Project } from '../../../projects/domain/project.entity';

describe('Project entity', () => {
  it('should create a project', () => {
    const project = new Project({
      id: '1',
      name: 'Project 1',
      description: 'Description 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(project).toBeDefined();
    expect(project.id).toBe('1');
    expect(project.name).toBe('Project 1');
    expect(project.description).toBe('Description 1');
    expect(project.createdAt).toBeInstanceOf(Date);
    expect(project.updatedAt).toBeInstanceOf(Date);
  });
});