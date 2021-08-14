import { RequestHandler, Response } from "express";
import { AuthRequest } from "./middlewares/requiresAuth";

export const secretHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
  if (req.user?.role)
    res.json({
      msg: "👋 You've found a secret route!",
    });
};

export const reviewerHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
  if (req.user?.role)
    res.json({
      msg: "👋 Reviewer",
    });
};
export const interviewerHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
  if (req.user?.role)
    res.json({
      msg: "👋 Interviewer",
    });
};

export const reviewerInterviewerHandler: RequestHandler = async (
  req: AuthRequest,
  res: Response
) => {
  if (req.user?.role)
    res.json({
      msg: "👋 Reviewer & Interviewer",
    });
};

export const superAdminHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
  if (req.user?.role)
    res.json({
      msg: "👋 SuperAdmin",
    });
};
