import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  firstName: string;
  chain: string;
  nombre: number;
  date: Date;
  isAdmin: boolean;
  list: string[];

  constructor() { }

  ngOnInit() {
    this.firstName = 'Thao';
    this.chain = 'My super string!';
    this.nombre = 483.37593;
    this.date = new Date();
    this.isAdmin = false;
    this.list = ['Sel', 'Poivre', 'Sucre'];
  }

  changeName() {
    this.firstName = 'Thang';
  }
}
