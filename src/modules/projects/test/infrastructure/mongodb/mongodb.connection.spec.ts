import mongoose from 'mongoose';
import { connectToMongoDB } from '../../../infrastructure/database/mongodb/mongodb.connection';
import { config } from '../../../config';

describe('MongoDB Connection', () => {
  beforeAll(async () => {
    await connectToMongoDB(config.mongoDB.uri);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should connect to the MongoDB database', () => {
    expect(mongoose.connection.readyState).toBe(1);
  });
});