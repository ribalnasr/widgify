import { Component } from '@angular/core';
import { WidgifyDynamicSettings } from './dynamic.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'widgify-dynamic',
	templateUrl: './dynamic.component.html',
})
export class WidgifyDynamicComponent extends WidgifyBaseComponent<WidgifyDynamicSettings> {

	public widget = this.settingsChanges.pipe(
		switchMap(
			settings => this.toObservables(settings.data),
		),
		map(
			data => typeof this.settings.widget === 'function'
			? this.settings.widget(data)
			: this.settings.widget
		)
	);

	public toObservables<T>(problems: any) {
		if (!Array.isArray(problems)) {
			return this.toObservable<T>(problems);
		}
		const observables = problems.map(problem => this.toObservable<T>(problem));
		return combineLatest(observables);
	}

	public toObservable<T>(problem: any) {
		if (problem instanceof Observable) {
			return problem;
		} else {
			return new Observable<T>(o => {
				Promise.resolve(problem).then(
					result => {
						o.next(result);
					}
				);
			})
		}
	}


}
