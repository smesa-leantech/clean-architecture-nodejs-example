import mongoose from 'mongoose';
import { MongoDBProjectRepository } from '../../../../projects/infrastructure/mongodb/mongodb.repository';
import { Project } from '../../../../projects/domain/project.entity';
import { ProjectInput } from '../../../../projects/domain/project.types';
import { connectToMongoDB } from '../../../../infrastructure/database/mongodb/mongodb.connection';

describe('MongoDBProjectRepository', () => {
  let repository: MongoDBProjectRepository;

  beforeAll(async () => {
    await connectToMongoDB();
    repository = new MongoDBProjectRepository();
  });

  afterEach(async () => {
    await Project.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('create', () => {
    it('should create a project', async () => {
      const input: ProjectInput = {
        name: 'Test Project',
        description: 'This is a test project',
      };

      const project = await repository.create(input);

      expect(project.id).toBeDefined();
      expect(project.name).toBe(input.name);
      expect(project.description).toBe(input.description);
      expect(project.createdAt).toBeDefined();
      expect(project.updatedAt).toBeDefined();
    });
  });

  describe('findById', () => {
    it('should find a project by id', async () => {
      const input: ProjectInput = {
        name: 'Test Project',
        description: 'This is a test project',
      };

      const createdProject = await repository.create(input);

      const foundProject = await repository.findById(createdProject.id);

      expect(foundProject).toBeDefined();
      expect(foundProject?.id).toBe(createdProject.id);
      expect(foundProject?.name).toBe(createdProject.name);
      expect(foundProject?.description).toBe(createdProject.description);
      expect(foundProject?.createdAt).toBeDefined();
      expect(foundProject?.updatedAt).toBeDefined();
    });

    it('should return null if project is not found', async () => {
      const foundProject = await repository.findById('non-existent-id');

      expect(foundProject).toBeNull();
    });
  });

  describe('findAll', () => {
    it('should find all projects', async () => {
      const input1: ProjectInput = {
        name: 'Test Project 1',
        description: 'This is a test project 1',
      };

      const input2: ProjectInput = {
        name: 'Test Project 2',
        description: 'This is a test project 2',
      };

      await repository.create(input1);
      await repository.create(input2);

      const foundProjects = await repository.findAll();

      expect(foundProjects).toHaveLength(2);
    });

    it('should return an empty array if no projects are found', async () => {
      const foundProjects = await repository.findAll();

      expect(foundProjects).toHaveLength(0);
    });
  });

  describe('update', () => {
    it('should update a project', async () => {
      const input: ProjectInput = {
        name: 'Test Project',
        description: 'This is a test project',
      };

      const createdProject = await repository.create(input);

      const updateInput: ProjectInput = {
        name: 'Updated Test Project',
        description: 'This is an updated test project',
      };

      const updatedProject = await repository.update(createdProject.id, updateInput);

      expect(updatedProject.id).toBe(createdProject.id);
      expect(updatedProject.name).toBe(updateInput.name);
      expect(updatedProject.description).toBe(updateInput.description);
      expect(updatedProject.createdAt).toBe(createdProject.createdAt);
      expect(updatedProject.updatedAt).toBeDefined();
    });

    it('should return null if project is not found', async () => {
      const updateInput: ProjectInput = {
        name: 'Updated Test Project',
        description: 'This is an updated test project',
      };

      const updatedProject = await repository.update('non-existent-id', updateInput);

      expect(updatedProject).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete a project', async () => {
      const input: ProjectInput = {
        name: 'Test Project',
        description: 'This is a test project',
      };

      const createdProject = await repository.create(input);

      await repository.delete(createdProject.id);

      const foundProject = await repository.findById(createdProject.id);

      expect(foundProject).toBeNull();
    });
  });
});