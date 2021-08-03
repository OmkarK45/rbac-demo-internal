interface PermissionType {
	student_res: boolean
	reviewer_res: boolean
	admin_res: boolean
}
export interface IPolicy {
	10: PermissionType
	5: PermissionType
	1: PermissionType
}

export const policy: IPolicy = {
	10: {
		student_res: true,
		reviewer_res: true,
		admin_res: true,
	},
	5: {
		student_res: false,
		reviewer_res: true,
		admin_res: false,
	},
	1: {
		student_res: true,
		reviewer_res: false,
		admin_res: false,
	},
}
