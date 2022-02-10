import { WiRepeaterList } from "./repeater-list.class";

export class WiRepeaterRow<T> {

	constructor(
		public data: T,
		public index: number,
		public list: WiRepeaterList<T>
	) { }

	public remove() {
		this.list.remove(this.index);
	}

	public update(data: T) {
		this.list.update(this.index, data);
	}

}


export const wiRepeaterRow = <T>(
	data: T,
	index: number,
	list: WiRepeaterList<T>

) => new WiRepeaterRow(data, index, list);