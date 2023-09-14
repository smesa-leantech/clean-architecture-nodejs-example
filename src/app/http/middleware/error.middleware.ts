import { Request, Response, NextFunction } from "express";
import { Logger } from "../../logger/logger";

const logger = new Logger("ErrorMiddleware");

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message);
  res.status(500).json({ error: "Internal server error" });
};
