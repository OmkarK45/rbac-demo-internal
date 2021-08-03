import { Router } from 'express'
import { roleRequired } from '../middlewares/checkAccess'
import { requiresAuth } from '../middlewares/requiresAuth'
import { loginHandler } from '../routerHandler'
import { secretHandler } from '../secretHandler'

const router = Router()

router.route('/login').post(loginHandler)

router.route('/secret-page').get(requiresAuth, roleRequired(10), secretHandler)

export = router
