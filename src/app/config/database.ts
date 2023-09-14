import mongoose from 'mongoose';

export const connectToDatabase = async (databaseUrl: string): Promise<void> => {
  try {
    await mongoose.connect(databaseUrl);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};