import { Component, ViewEncapsulation } from '@angular/core';
import { WidgifyDynamicSettings } from './dynamic.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { map, switchMap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { WidgifyDynamic } from './dynamic.class';

@Component({
	selector: 'widgify-dynamic',
	templateUrl: './dynamic.component.html',
	encapsulation: ViewEncapsulation.Emulated,

})
export class WidgifyDynamicComponent<DataType extends any = any> extends WidgifyBaseComponent<WidgifyDynamicSettings<DataType>, DataType, WidgifyDynamic<DataType>> {

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
