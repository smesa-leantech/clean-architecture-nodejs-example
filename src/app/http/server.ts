import express, { Application } from "express";
import { ConfigType } from "../config";
import { setProjectRoutes } from "./routes/project.routes";
import { errorMiddleware } from "./middleware/error.middleware";
import { CreateProjectController } from "../../modules/projects/infrastructure/factories";

export const Server = (config: ConfigType) => {
  const app: Application = express();

  const setupMiddleware = (): void => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(errorMiddleware);
  };

  const setupRoutes = (): void => {
    setProjectRoutes(app, CreateProjectController());
  };

  const start = (): void => {
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`);
    });
  };

  setupMiddleware();
  setupRoutes();

  return { start };
};
