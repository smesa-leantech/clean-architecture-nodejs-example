import { Pool } from 'pg';
import { ProjectRepository } from '../../../modules/projects/domain/ports/project.repository';
import { Project } from '../../../modules/projects/domain/entities/project.entity';
import { DatabaseError } from '../../errors/database.error';
import { DatabaseConnection } from '../database.connection';
import { PostgresqlConnection } from './postgresql.connection';

export class PostgresqlProjectRepository implements ProjectRepository {
  private readonly pool: Pool;

  constructor() {
    this.pool = PostgresqlConnection.getInstance().getPool();
  }

  async create(project: Project): Promise<Project> {
    const client = await this.pool.connect();
    try {
      const { rows } = await client.query(
        'INSERT INTO projects (name, description) VALUES ($1, $2) RETURNING *',
        [project.name, project.description],
      );
      return rows[0];
    } catch (error) {
      throw new DatabaseError('Error creating project', error);
    } finally {
      client.release();
    }
  }

  async update(project: Project): Promise<Project> {
    const client = await this.pool.connect();
    try {
      const { rows } = await client.query(
        'UPDATE projects SET name = $1, description = $2 WHERE id = $3 RETURNING *',
        [project.name, project.description, project.id],
      );
      return rows[0];
    } catch (error) {
      throw new DatabaseError('Error updating project', error);
    } finally {
      client.release();
    }
  }

  async delete(id: string): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('DELETE FROM projects WHERE id = $1', [id]);
    } catch (error) {
      throw new DatabaseError('Error deleting project', error);
    } finally {
      client.release();
    }
  }

  async findById(id: string): Promise<Project | null> {
    const client = await this.pool.connect();
    try {
      const { rows } = await client.query('SELECT * FROM projects WHERE id = $1', [id]);
      return rows[0] || null;
    } catch (error) {
      throw new DatabaseError('Error finding project by id', error);
    } finally {
      client.release();
    }
  }

  async findAll(): Promise<Project[]> {
    const client = await this.pool.connect();
    try {
      const { rows } = await client.query('SELECT * FROM projects');
      return rows;
    } catch (error) {
      throw new DatabaseError('Error finding all projects', error);
    } finally {
      client.release();
    }
  }
}