// NOTE: Whenever you're adding a role, rollNo = (topValue - bottomValue / 2)

export interface IPolicy {
  student: number;
  reviewer: number;
  abc: number;
  interviewer: number;
  superAdmin: number;
}

export const policy: IPolicy = {
  student: 10,
  reviewer: 20,
  abc: 25,
  interviewer: 30,
  superAdmin: 100,
};
