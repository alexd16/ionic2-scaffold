import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic/ionic';

import {Page} from 'ionic/ionic';

@Component({
  selector: 'guest',
  templateUrl: 'build/pages/layout/guest/guest.html',
  directives: [IONIC_DIRECTIVES]
})
export class Guest {
  @Output('login') logins = new EventEmitter();
  
  login() {
    this.logins.emit();
  }
}