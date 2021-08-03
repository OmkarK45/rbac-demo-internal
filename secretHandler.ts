import { RequestHandler, Response } from 'express'
import { AuthRequest } from './middlewares/requiresAuth'

export const secretHandler: RequestHandler = async (
	req: AuthRequest,
	res: Response
) => {
	if (req.user?.role)
		res.json({
			msg: 'Woo you have foudn me ',
		})
}
