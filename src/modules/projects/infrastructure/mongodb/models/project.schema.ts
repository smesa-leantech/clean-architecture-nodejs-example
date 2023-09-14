import { Schema, model } from "mongoose";
import { ProjectEntity } from "../../../domain";

const projectSchema = new Schema<ProjectEntity>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ProjectModel = model<ProjectEntity>("Project", projectSchema);
