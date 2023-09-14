export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface DatabaseConnection {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export interface DatabaseRepository<T> {
  create: (data: T) => Promise<T>;
  read: (id: string) => Promise<T | null>;
  update: (id: string, data: Partial<T>) => Promise<T | null>;
  delete: (id: string) => Promise<void>;
  list: () => Promise<T[]>;
}