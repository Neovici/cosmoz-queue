type Setter<T> = (v: T) => void;
type Handler<T> = (e: CustomEvent<T>) => void;

const getPolymerPropertyValueFromUpdateEventDetail = (detail: any) => {
	if (detail == null) {
		return;
	}
	const subPath = detail?.path?.split('.')[1];
	switch (subPath) {
		case 'length':
			return;
		case 'splices':
			return detail?.value?.indexSplices?.reduce((agg: any, splice: any) => {
				return [...splice.object]; // shallow copy
			}, []);
		default:
			return detail.value;
	}
};

export function updateWith<T>(setter: Setter<T>): Handler<T>;
export function updateWith<T>(setter?: Setter<T>): Handler<T> | void;
export function updateWith<T>(setter?: Setter<T>): Handler<T> | void {
	if (!setter) return;
	return (event) => {
		const newValue = getPolymerPropertyValueFromUpdateEventDetail(
			event?.detail,
		);
		if (newValue === undefined) {
			return;
		}
		setter(newValue);
	};
}
