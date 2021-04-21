import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx'
import { ProductResult } from '../_models/product-result';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  model: ProductResult;

  constructor(
    private scanner: BarcodeScanner,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  async scan() {
    let result = await this.scanner.scan();
    this.http.get<ProductResult>(
      'https://world.openfoodfacts.org/api/v0/product/' + result.text + '.json'
    ).subscribe(data => this.model = data);
  }
}
