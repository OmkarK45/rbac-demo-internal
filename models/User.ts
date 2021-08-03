import mongoose from 'mongoose'

export interface IUser {
	email: string
	password: string
	username: string
	role: 1 | 5 | 8 | 10
}

const userSchema = new mongoose.Schema({
	email: { type: String },
	password: { type: String },
	username: { type: String },
	role: {
		type: Number,
		enum: [1, 5, 8, 10],
		default: 1,
	},
})

export const User = mongoose.model<IUser>('User', userSchema)
