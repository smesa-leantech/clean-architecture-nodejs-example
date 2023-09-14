import { Project } from '../../../src/projects/domain/project.entity';
import { ProjectRepository } from '../../../src/projects/domain/project.repository';

describe('ProjectRepository', () => {
  let projectRepository: ProjectRepository;

  beforeEach(() => {
    projectRepository = new ProjectRepository();
  });

  describe('findAll', () => {
    it('should return an empty array when there are no projects', async () => {
      const projects = await projectRepository.findAll();
      expect(projects).toEqual([]);
    });

    it('should return an array of projects when there are projects', async () => {
      const project1 = new Project('1', 'Project 1', 'Description 1');
      const project2 = new Project('2', 'Project 2', 'Description 2');
      await projectRepository.create(project1);
      await projectRepository.create(project2);
      const projects = await projectRepository.findAll();
      expect(projects).toEqual([project1, project2]);
    });
  });

  describe('findById', () => {
    it('should return null when the project does not exist', async () => {
      const project = await projectRepository.findById('1');
      expect(project).toBeNull();
    });

    it('should return the project when it exists', async () => {
      const project1 = new Project('1', 'Project 1', 'Description 1');
      const project2 = new Project('2', 'Project 2', 'Description 2');
      await projectRepository.create(project1);
      await projectRepository.create(project2);
      const project = await projectRepository.findById('1');
      expect(project).toEqual(project1);
    });
  });

  describe('create', () => {
    it('should create a new project', async () => {
      const project = new Project('1', 'Project 1', 'Description 1');
      await projectRepository.create(project);
      const result = await projectRepository.findById('1');
      expect(result).toEqual(project);
    });
  });

  describe('update', () => {
    it('should update an existing project', async () => {
      const project = new Project('1', 'Project 1', 'Description 1');
      await projectRepository.create(project);
      const updatedProject = new Project('1', 'Updated Project 1', 'Updated Description 1');
      await projectRepository.update(updatedProject);
      const result = await projectRepository.findById('1');
      expect(result).toEqual(updatedProject);
    });
  });

  describe('delete', () => {
    it('should delete an existing project', async () => {
      const project = new Project('1', 'Project 1', 'Description 1');
      await projectRepository.create(project);
      await projectRepository.delete('1');
      const result = await projectRepository.findById('1');
      expect(result).toBeNull();
    });
  });
});