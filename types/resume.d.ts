export type Certification = {
	id: string,
	title: string,
	certificationDate: string, // TODO date
	link: ?string,
};

export type PositionActivity = {
	summary: string,
	details?: Array<string>,
}

export type Position = {
	title: string,
	summary: string,
	startDate: string, // TODO date
	endDate: ?string, // TODO date
	activities: ?Array<PositionActivity>,
};

export type Experience = {
	organization: string,
	location: string,
	description: string,
	positions: Array<Position>,
};
