import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NodeItem } from '../models/item';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-node-item',
  templateUrl: './node-item.component.html',
  styleUrls: ['./node-item.component.css']
})
export class NodeItemComponent implements OnInit {
  itemlist: Observable<NodeItem[]>;
  constructor(private itemServices:ItemService) {
    this.itemlist = this.itemServices.getItems();
   }

  ngOnInit(): void {
    
  }

}
