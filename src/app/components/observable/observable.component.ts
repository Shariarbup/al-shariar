import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  data: any[] = [];

  myObservable = new Observable((observer)=> {
    // observer.next([1, 2, 3, 4, 5]);
    setTimeout(()=> { observer.next(1)}, 1000);
    setTimeout(()=> { observer.next(2)}, 2000);
    setTimeout(()=> { observer.next(3)}, 3000);
    setTimeout(()=> { observer.next(4)}, 4000);
    setTimeout(()=> { observer.next(5)}, 5000);
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
  });

  getAsyncData() {
    // this subscriber handle three controll(next, error, complete)
    this.myObservable.subscribe((val: any) => {
      // this.data = val;
      this.data.push(val);
    })
  }
}
