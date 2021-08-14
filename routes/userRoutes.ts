import { Router } from "express";
import { roleRequired } from "../middlewares/checkAccess";
import { requiresAuth } from "../middlewares/requiresAuth";
import { policy } from "../roles/policy";
import { loginHandler } from "../routerHandler";
import {
  reviewerHandler,
  secretHandler,
  interviewerHandler,
  reviewerInterviewerHandler,
  superAdminHandler,
} from "../secretHandler";

const router = Router();

router.route("/login").post(loginHandler);

const { student, reviewer, interviewer, superAdmin, abc } = policy;

router.route("/secret-page").get(requiresAuth, roleRequired(student), secretHandler);
router.route("/as-reviewer").get(requiresAuth, roleRequired(reviewer), reviewerHandler);
router.route("/as-interviewer").get(requiresAuth, roleRequired(interviewer), interviewerHandler);
// roleRequired would take a necessary role and an optional parameter of the highest role they can access.
router
  .route("/as-reviewer-interviewer")
  .get(requiresAuth, roleRequired(abc), reviewerInterviewerHandler);
router.route("/as-superAdmin").get(requiresAuth, roleRequired(superAdmin), superAdminHandler);

export = router;
