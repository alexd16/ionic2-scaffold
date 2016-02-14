import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Page} from 'ionic/ionic';
import {IONIC_DIRECTIVES} from 'ionic/ionic';
import {Home} from '../../home/home';

@Component({
  selector: 'authenticated',
  templateUrl: 'build/pages/layout/authenticated/authenticated.html',
  directives: [IONIC_DIRECTIVES]
})
export class Authenticated {
  @Output('logout') logouts = new EventEmitter();
  constructor() {
    this.home = Home; 
  }
  
  logout() {
    this.logouts.emit()
  }
}