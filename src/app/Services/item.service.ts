import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {NodeItem} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  getItems():Observable <NodeItem[]>{
  return this.http.get<NodeItem[]>('http://localhost:8000/api/items/');

  }

  insertItem(item:NodeItem): Observable<NodeItem> {
    	const headers = { 'content-type': 'application/json'} 
    	// console.log(JSON.stringify(item))						
      return this.http.post<NodeItem>('http://localhost:8000/api/insert/', item, {'headers':headers});
  }
}
