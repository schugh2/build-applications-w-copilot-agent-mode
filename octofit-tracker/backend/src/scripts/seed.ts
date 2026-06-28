import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

// Seed the octofit_db database with test data.

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

async function seed() {
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB for seeding');

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({})
  ]);

  const users = await User.insertMany([
    {
      username: 'maya',
      email: 'maya@example.com',
      password: 'secret123',
      fitnessGoal: 'Build endurance',
      level: 'Intermediate'
    },
    {
      username: 'liam',
      email: 'liam@example.com',
      password: 'secret123',
      fitnessGoal: 'Lose weight',
      level: 'Beginner'
    },
    {
      username: 'sara',
      email: 'sara@example.com',
      password: 'secret123',
      fitnessGoal: 'Increase strength',
      level: 'Advanced'
    }
  ]);

  const teams = await Team.insertMany([
    {
      name: 'Endurance Squad',
      description: 'Focused on long-distance and cardio improvements.',
      members: [users[0]._id, users[1]._id]
    },
    {
      name: 'Strength Crew',
      description: 'Focused on powerlifting and strength goals.',
      members: [users[2]._id]
    }
  ]);

  await Activity.insertMany([
    {
      userId: users[0]._id,
      type: 'Run',
      duration: 45,
      calories: 520,
      date: new Date('2026-06-20')
    },
    {
      userId: users[1]._id,
      type: 'Cycling',
      duration: 30,
      calories: 310,
      date: new Date('2026-06-21')
    },
    {
      userId: users[2]._id,
      type: 'Weight Training',
      duration: 60,
      calories: 700,
      date: new Date('2026-06-22')
    }
  ]);

  await LeaderboardEntry.insertMany([
    {
      userId: users[0]._id,
      points: 1800,
      streak: 7
    },
    {
      userId: users[1]._id,
      points: 1350,
      streak: 4
    },
    {
      userId: users[2]._id,
      points: 2200,
      streak: 9
    }
  ]);

  await Workout.insertMany([
    {
      title: 'Morning HIIT',
      description: 'Short intervals for cardiovascular fitness.',
      difficulty: 'Intermediate',
      duration: 25,
      targetMuscleGroup: 'Full Body'
    },
    {
      title: 'Core Strength',
      description: 'Plank and ab-based circuit for core stability.',
      difficulty: 'Beginner',
      duration: 20,
      targetMuscleGroup: 'Core'
    },
    {
      title: 'Upper Body Power',
      description: 'Strength-focused routine for shoulders and back.',
      difficulty: 'Advanced',
      duration: 45,
      targetMuscleGroup: 'Upper Body'
    }
  ]);

  console.log(`Seeded ${users.length} users, ${teams.length} teams, and workout data`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
