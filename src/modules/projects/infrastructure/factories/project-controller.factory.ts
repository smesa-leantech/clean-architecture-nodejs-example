import { MongoDBProjectRepositoryImpl } from "../mongodb";
import { PostegresqlProjectRepositoryImpl } from "../postgresql";
import { ProjectController } from "../presentation";

export const CreateProjectController = () => {
  switch (process.env.DB_TYPE) {
    case "mongodb":
      return ProjectController(MongoDBProjectRepositoryImpl());
    case "postgresql":
      return ProjectController(PostegresqlProjectRepositoryImpl());
    default:
      return ProjectController(MongoDBProjectRepositoryImpl());
  }
};
