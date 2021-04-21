import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Stop-watch', url: '/chrono', icon: 'timer' },
    { title: 'Shopping List', url: '/cart', icon: 'cart' },
    { title: 'Gender Checker', url: '/gender', icon: 'people' },
    { title: 'Pokemon', url: '/pokemon', icon: 'game-controller' },
    { title: 'Food Scanner', url: '/scanner', icon: 'scan' },
  ];
  constructor() {}
}
