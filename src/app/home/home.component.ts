import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { increment, decrement, reset } from '../reducers/counter.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private store = inject(Store);
  count$?:Observable<number>;
  constructor(private router: Router){
    this.count$ = this.store.select('counter');
    console.log(this.count$)
  }
  goTo(){
    this.router.navigate(["/user"])
  }
  
  doIncrement(){
    this.store.dispatch(increment())
  }
  doDecrement(){
    this.store.dispatch(decrement())
  }
  doReset(){
    this.store.dispatch(reset())
  }
}
