import { Injectable } from "@angular/core";
import { ListItem } from "../models/list-item";

@Injectable({
  providedIn: "root",
})
export class ListService {
    items: ListItem[] = [
        { id: 'uno', title: 'Elemento 1', description: 'Descrizione 1' },
        { id: 'due', title: 'Elemento 2', description: 'Descrizione 2' },
        { id: 'tre', title: 'Elemento 3', description: 'Descrizione 3' }
      ];
    
      constructor() { }
    
      getItems() {
        return this.items;
      }
    
      getItemById(id: string) {
        return this.items.find(item => item.id === id);
      }
    
      updateItem(item: any) {
        const index = this.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
          this.items[index] = item;
        }
      }
}