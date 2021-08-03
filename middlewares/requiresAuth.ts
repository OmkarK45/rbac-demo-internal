import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { IUser, User } from '../models/User'

export interface AuthRequest extends Request {
	user?: IUser
}

export async function requiresAuth(
	req: AuthRequest,
	res: Response,
	next: NextFunction
) {
	const cookie = req.cookies
	if (!cookie) {
		return res.status(401).json({
			msg: 'No cookie was found',
			success: false,
		})
	}
	const token = cookie.token
	if (!token) {
		return res.status(401).json({
			success: false,
			msg: 'You are not authorized to do that.',
		})
	}
	try {
		const decodedUser: any = jwt.verify(token, 'mystrongsecret')
		const user = await User.findOne({ email: decodedUser.email })
		console.log(user)
		if (!user) {
			return res.status(404).json({
				msg: 'No user found with this ID',
				success: false,
			})
		}
		req.user = user
		next()
	} catch (error) {
		console.log(error)
		res.status(401).json({
			success: false,
			msg: 'You are not authorized to access this resource',
		})
	}
}
