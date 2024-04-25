import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 40 }];

  constructor() {
  }


  ngOnInit(): void {
   
  }

}
