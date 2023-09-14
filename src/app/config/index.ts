import { connectToDatabase } from "./database";

export type ConfigType = {
  port: string | number;
  database: {
    url: string;
  };
};
const config: ConfigType = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/my-kanban-app",
  },
};

const appConfig = {
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
};

const database = connectToDatabase(config.database.url);

export { config, appConfig, database };
