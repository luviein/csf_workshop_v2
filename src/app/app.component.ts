import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_ws_v2';
  receivedItems : any[] = [];
  nameReceived: string = "";

  itemChanged(event:string) {
    this.nameReceived = event;
    console.log("name received >>>>> " + this.nameReceived);

    if(this.receivedItems.length == 0) {
      this.receivedItems.push({itemName: event, quantity: 1});
    } else {
      // matching item name in array with the event:string

      let obj = this.receivedItems.find(o => o.itemName === event);
      let foundIndex = this.receivedItems.indexOf(obj, 0);
      console.log("foundindex = " + foundIndex)
      if(foundIndex >= 0) {
        this.receivedItems[foundIndex].quantity++;
      }else{
        this.receivedItems.push({itemName: event, quantity: 1})
      }

    }


  }

}
