import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  data: any[] = [];

  ofData: any[] = [];
  array1: any[] = [1,2,3,4,5];
  array2: any[] = ['A', 'B','C', 'D'];

  myObservable = new Observable((observer)=> {
    // observer.next([1, 2, 3, 4, 5]);
    setTimeout(()=> { observer.next(1)}, 1000);
    setTimeout(()=> { observer.next(2)}, 2000);
    // setTimeout(()=> { observer.error(new Error("Something went wrong, please try again"))}, 3000);
    setTimeout(()=> { observer.next(3)}, 3000);
    setTimeout(()=> { observer.next(4)}, 4000);
    setTimeout(()=> { observer.next(5)}, 5000);
    setTimeout(()=> { observer.complete()}, 3000);
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
  });

  // getAsyncData() {
  //   // this subscriber handle three controll(next, error, complete)
  //   this.myObservable.subscribe((val: any) => {
  //     // this.data = val;
  //     this.data.push(val);
  //   },
  //   (error)=> {
  //     alert(error.message)
  //   },
  //   () => {
  //     alert("All the data is streamed")
  //   }
  //   )
  // }

  getAsyncData() {
    // this subscriber handle three controll(next, error, complete)
    this.myObservable.subscribe({
      next: (val: any)=> {
        this.data.push(val);
      },
      error(err: any) {
        alert(err.message)
      },
      complete() {
        alert("All the data is streamed");
      }
    })
  }

  ofObservable = of(this.array1, this.array2, 20, 30, 'A');


  getOfAsyncData() {
    this.ofObservable.subscribe({
      next: (val: any)=> {
        this.ofData.push(val);
        console.log("🚀 ~ ObservableComponent ~ getOfAsyncData ~ val:", val)
      },
      error(err: any) {
        alert(err.message)
      },
      complete() {
        alert("All the data is streamed");
      }
    })
  }

  fromObservable = from([1,2,3,4])

  getFromObservable() {
    this.fromObservable.subscribe({
      next: (val: any)=> {
        this.ofData.push(val);
        console.log("🚀 ~ ObservableComponent ~ getOfAsyncData ~ val:", val)
      },
      error(err: any) {
        alert(err.message)
      },
      complete() {
        alert("All the data is streamed");
      }
    })
  }
}
