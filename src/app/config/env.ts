export const env = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/my-kanban-app',
  POSTGRESQL_URI: process.env.POSTGRESQL_URI || 'postgresql://localhost:5432/my-kanban-app',
};

