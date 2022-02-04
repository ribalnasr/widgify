import { Component } from '@angular/core';
import { WidgifyDynamicSettings } from './dynamic.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'widgify-dynamic',
	templateUrl: './dynamic.component.html',
})
export class WidgifyDynamicComponent<T> extends WidgifyBaseComponent<WidgifyDynamicSettings<T>> {

	public widget = this.settings$.pipe(
		switchMap(
			settings => this.toObservables(settings.current.data),
		),
		map(
			(data: T) => typeof this.settings.widget === 'function'
				? this.settings.widget(data)
				: this.settings.widget
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
