import { ReplaySubject } from "rxjs";

export class WidgifyRepeaterList<T> {

	public valueChanges = new ReplaySubject<T[]>();

	constructor(
		public data: T[] = []
	) {
		this.valueChanges.next(data);
	}

	public set(data: T[]) {
		this.data = data;
		this.valueChanges.next(this.data);
	}

	public add(data: T | T[], atTheBeginning?: boolean) {
		let newData: T[];
		if (Array.isArray(data)) {
			newData = data;
		} else {
			newData = [data];
		}
		if (atTheBeginning) {

			this.data = [...newData, ...(this.data || [])];
		} else {
			this.data = [...(this.data || []), ...newData];
		}
		this.valueChanges.next(this.data);
	}

	public remove(index: number) {
		console.log(this)
		const value = [...this.data];
		value.splice(index, 1);
		this.data = value;
		this.valueChanges.next(this.data);
	}

	public update(index: number, data: T) {
		this.data[index] = data;
		this.valueChanges.next(this.data);
	}

}

export const widgifyRepeaterList = <T>(data: T[]) => new WidgifyRepeaterList(data);