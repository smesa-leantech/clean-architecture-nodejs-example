import { Router } from "express";
import { IProjectController } from "../../../modules/projects";

export function setProjectRoutes(
  router: Router,
  projectController: IProjectController
): void {
  router.get("/projects", projectController.getAll.bind(projectController));
  router.get("/projects/:id", projectController.get.bind(projectController));
  router.post("/projects", projectController.create.bind(projectController));
  router.put("/projects/:id", projectController.update.bind(projectController));
  router.delete(
    "/projects/:id",
    projectController.delete.bind(projectController)
  );
}
