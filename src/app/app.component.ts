import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Stopwatch', url: '/chrono', icon: 'timer' },
    { title: 'Shopping List', url: '/cart', icon: 'cart' },
    { title: 'Gender', url: '/gender', icon: 'people' },
    { title: 'Pokemon', url: '/pokemon', icon: 'game-controller' },
    { title: 'Scanner', url: '/scanner', icon: 'scan' },
  ];
  constructor() {}
}
