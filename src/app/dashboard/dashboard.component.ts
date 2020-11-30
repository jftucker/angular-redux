import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { CLEAR_TODOS } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @select() lastUpdate;
  @select() todos;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  clearAll() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
