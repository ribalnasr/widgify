import { WidgifyRepeaterList } from "./repeater-list.class";

export class WidgifyRepeaterRow<T> {

	constructor(
		public data: T,
		public index: number,
		public list: WidgifyRepeaterList<T>
	) { }

	public remove() {
		this.list.remove(this.index);
	}

	public update(data: T) {
		this.list.update(this.index, data);
	}

}


export const widgifyRepeaterRow = <T>(
	data: T,
	index: number,
	list: WidgifyRepeaterList<T>

) => new WidgifyRepeaterRow(data, index, list);