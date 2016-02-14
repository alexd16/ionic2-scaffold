import {Page} from 'ionic/ionic';
import {Guest} from './guest/guest'
import {Authenticated} from './authenticated/authenticated'

@Page({
  templateUrl: 'build/pages/layout/layout.html',
    directives: [Guest, Authenticated]
})
export class Layout {
  constructor() {
    this.isAuthenticated = false;
  }
 
  logout() {
    this.isAuthenticated = false;    
  }
  
  login() {
    this.isAuthenticated = true;
  }
}