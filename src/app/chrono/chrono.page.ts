import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})
export class ChronoPage implements OnInit {
  time: number;
  idInterval: any;
  times: number[];

  constructor() { }

  ngOnInit() {
    this.time = 0;
    this.times=[];
  }

  stop() {
    clearInterval(this.idInterval); 
    this.idInterval = null; 

  }
  start() {
    this.times = [];
    const start = Date.now();

    this.idInterval= setInterval(() => {
      this.time = Date.now() - start;
    }, 1);

  }

  save() {
    this.times.push(this.time);
  }

}
