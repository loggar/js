import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

let stream$ = Observable.of(1, 2, 3).map(x => x + '!!!');

stream$.subscribe((val) => {
	console.log(val) // 1!!! 2!!! 3!!!
})
