import {
  MongoDBProjectRepositoryImpl,
  ProjectController,
} from "../../modules/projects";

export const CreateProjectController = () => {
  switch (process.env.DB_TYPE) {
    case "mongodb":
      return ProjectController(MongoDBProjectRepositoryImpl());
    case "postgresql":
      return ProjectController(MongoDBProjectRepositoryImpl());
    default:
      return ProjectController(MongoDBProjectRepositoryImpl());
  }
};
