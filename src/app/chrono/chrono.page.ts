import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})
export class ChronoPage implements OnInit {
  time: number;
  idInterval: any;
  times: number[];

  constructor(
    // dependency injection
    private alertCrtl: AlertController
  ) { }

  ngOnInit() {
    this.time = 0;
    this.times=[];
  }

  stop() {
    this.alertCrtl.create({
      header: 'Confirmation',
      message: 'Are you sure you want to stop?',
      buttons: [{
        text: 'Ok',
        handler: () => {
          clearInterval(this.idInterval);
          this.idInterval = null;
        }
      }, 'cancel']
    }).then(a => a.present());
    
    // clearInterval(this.idInterval); 
    // this.idInterval = null; 
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
