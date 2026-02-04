import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const MONGODB_URI = "mongodb+srv://ajaysidal_db_user:recWu3Ymtq9SCN3m@opsvantagedigitalwebsit.33gt6k2.mongodb.net/?retryWrites=true&w=majority&appName=OpsVantageDigitalWebsite";

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log('Connected to MongoDB');

    await User.deleteMany({});
    console.log('Cleared existing users');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password', salt);

    const users = [
      {
        name: 'Ajay Sidal',
        email: 'ajay@opsvantage.com',
        password: hashedPassword,
        role: 'admin' as const,
        createdAt: new Date(),
      },
    ];

    await User.insertMany(users);
    console.log('Seeded users');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seed();
