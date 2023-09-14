import mongoose from 'mongoose';
import { Logger } from '../../logger/logger';
import { env } from '../../config/env';

const logger = new Logger('MongoDB');

export const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    logger.info('Connected to MongoDB');
  } catch (error: unknown) {
    logger.error(`Error connecting to MongoDB: ${Error((error as Error).message)}`);
    process.exit(1);
  }
};