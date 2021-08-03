import { RequestHandler } from 'express'
import { User } from './models/User'
import jwt from 'jsonwebtoken'

export const loginHandler: RequestHandler = async (req, res) => {
	const { email, password } = req.body
	if (!email || !password) return res.json({ msg: 'bad creds' })

	const newUser = new User({
		email,
		password,
	})

	await newUser.save()

	const token = jwt.sign(
		{
			email,
			role: newUser.role,
		},
		'mystrongsecret',
		{
			expiresIn: '7d',
		}
	)
	res.cookie('token', token, {
		httpOnly: true,
	})
	res.json({
		token,
		newUser,
	})
}
