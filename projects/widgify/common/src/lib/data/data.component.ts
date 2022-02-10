import { Component, ViewEncapsulation } from '@angular/core';
import { WiDataSettings } from './data.interface';
import { WiBaseComponent } from '@widgify/core';
import { map, switchMap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { WiData } from './data.class';

@Component({
	selector: 'wi-data',
	templateUrl: './data.component.html',
	encapsulation: ViewEncapsulation.Emulated,

})
export class WiDataComponent<DataType extends any = any> extends WiBaseComponent<WiDataSettings<DataType>, DataType, WiData<DataType>> {

	public widgets = this.settings$.pipe(
		switchMap(
			settings => this.toObservables(settings.data),
		),
		map(
			(data: DataType) => {
				console.log(data)
				return this.parseChildren(data);
			}
		)
	);

	public toObservables(problems: any) {
		if (!Array.isArray(problems)) {
			return this.toObservable(problems);
		}
		const observables = problems.map(problem => this.toObservable(problem));
		return combineLatest(observables);
	}

	public toObservable(problem: any) {
		if (problem instanceof Observable) {
			return problem;
		} else {
			return new Observable(o => {
				Promise.resolve(problem).then(
					result => {
						o.next(result);
					}
				);
			})
		}
	}


}
