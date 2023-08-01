import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartItems: any[] = [];

  deleteItem(name: string) {
    let obj = this.cartItems.find(o => o.itemName === name);
    let foundIndex = this.cartItems.indexOf(obj, 0);
    console.log("delete index >>>>> " + foundIndex);

    // 1 indicates number of elements to be removed
    this.cartItems.splice(foundIndex, 1);
  }
}
