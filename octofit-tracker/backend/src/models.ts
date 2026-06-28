import mongoose, { Schema, model, Model } from 'mongoose';

export interface IUser {
  username: string;
  email: string;
  password: string;
  fitnessGoal: string;
  level: string;
}

export interface ITeam {
  name: string;
  description: string;
  members: mongoose.Types.ObjectId[];
}

export interface IActivity {
  userId: mongoose.Types.ObjectId;
  type: string;
  duration: number;
  calories: number;
  date: Date;
}

export interface ILeaderboardEntry {
  userId: mongoose.Types.ObjectId;
  points: number;
  streak: number;
}

export interface IWorkout {
  title: string;
  description: string;
  difficulty: string;
  duration: number;
  targetMuscleGroup: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fitnessGoal: { type: String, required: true },
  level: { type: String, required: true }
});

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const activitySchema = new Schema<IActivity>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, required: true },
  streak: { type: Number, required: true }
});

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: Number, required: true },
  targetMuscleGroup: { type: String, required: true }
});

export const User: Model<IUser> = model<IUser>('User', userSchema);
export const Team: Model<ITeam> = model<ITeam>('Team', teamSchema);
export const Activity: Model<IActivity> = model<IActivity>('Activity', activitySchema);
export const LeaderboardEntry: Model<ILeaderboardEntry> = model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);
export const Workout: Model<IWorkout> = model<IWorkout>('Workout', workoutSchema);
