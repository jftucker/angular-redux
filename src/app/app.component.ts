import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { INCREMENT } from './actions';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'redux-demo';
  @select('counter') count;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
