import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Article } from '../_models/article';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  newItem: string;

  items: Article[];

  constructor(private actionSheetCtr : ActionSheetController,
    private storage: NativeStorage
  ) {     
  }

  ngOnInit() {
    this.items = [];
    this.storage.getItem('ITEMS').then(data => {
      console.log(data);
      this.items = data;
    })
  }

  add() {
    if (this.newItem) {
      this.items.push({name: this.newItem, isChecked: false});
      // this.items = [... this.items, {name: this.newItem, isChecked: false}]
      this.newItem = null;
      this.save();
    }
  }


  async openActionSheet(item: Article) {
    const as = await this.actionSheetCtr.create({
      header: '',
      buttons: [
        { text: 'Cocher', handler: () => {
          item.isChecked = !item.isChecked;
          this.save();
        }},
        { text: 'Supprimer', handler: () =>{
          // First way: using splice
          const i = this.items.indexOf(item);
          this.items.splice(i, 1);
          this.save();

          // Second way: using filter
          // this.items = this.items.filter(x => x!== item);

        }}
      ]
    });
    as.present();
  }

  clearAll() {
    this.items.splice(0);
    this.save();
  }

  save() {
    this.storage.setItem('ITEMS', this.items);
  }
}
