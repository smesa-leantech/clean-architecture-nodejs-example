import { Project } from '../../../domain/project.entity';
import { ProjectDTO, ProjectInputDTO, ProjectUpdateDTO } from '../presentation/project.dto';
import { ProjectMapper } from './project.mapper';

describe('ProjectMapper', () => {
  const projectMapper = new ProjectMapper();

  describe('mapToEntity', () => {
    it('should map a ProjectInputDTO to a Project entity', () => {
      const projectInputDTO: ProjectInputDTO = {
        name: 'Test Project',
        description: 'This is a test project',
      };

      const projectEntity: Project = projectMapper.mapToEntity(projectInputDTO);

      expect(projectEntity).toEqual({
        name: 'Test Project',
        description: 'This is a test project',
      });
    });

    it('should map a ProjectUpdateDTO to a Project entity', () => {
      const projectUpdateDTO: ProjectUpdateDTO = {
        name: 'Updated Test Project',
        description: 'This is an updated test project',
      };

      const projectEntity: Project = projectMapper.mapToEntity(projectUpdateDTO);

      expect(projectEntity).toEqual({
        name: 'Updated Test Project',
        description: 'This is an updated test project',
      });
    });
  });

  describe('mapToDTO', () => {
    it('should map a Project entity to a ProjectDTO', () => {
      const projectEntity: Project = {
        id: '123',
        name: 'Test Project',
        description: 'This is a test project',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const projectDTO: ProjectDTO = projectMapper.mapToDTO(projectEntity);

      expect(projectDTO).toEqual({
        id: '123',
        name: 'Test Project',
        description: 'This is a test project',
        createdAt: projectEntity.createdAt.toISOString(),
        updatedAt: projectEntity.updatedAt.toISOString(),
      });
    });
  });
});