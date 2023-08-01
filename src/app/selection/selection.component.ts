import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  @Output() addItem: EventEmitter<string> = new EventEmitter();

  inventory : {itemName: string}[] = [];

  ngOnInit(): void {
    this.inventory.push({itemName: "Apple"});
    this.inventory.push({itemName: "Banana"});
    this.inventory.push({itemName: "Pear"});
    this.inventory.push({itemName: "Orange"});
    this.inventory.push({itemName: "Grape"});
    this.inventory.push({itemName: "Guava"});


  }

  onSelectedItem(itemName: string) {
    this.addItem.emit(itemName);
  }




}
