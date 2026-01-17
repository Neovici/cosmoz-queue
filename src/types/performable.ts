export type Performable<TAvailableAction = string> = {
	action: TAvailableAction;
	reasonCodeIds?: string[] | null;
};
