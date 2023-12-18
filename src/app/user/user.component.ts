import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  private store = inject(Store);
  count$?:Observable<number>;
  constructor(private router: Router){
    this.count$ = this.store.select('counter');
  }
  goTo(){
    this.router.navigate(["/"])
  }
}
