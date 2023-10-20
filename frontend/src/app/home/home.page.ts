import { ItemService } from '../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: any = [];
  newItem: any = {
    item_name: '',
    item_quantity: '',
    item_description: '',
  };

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getItems().subscribe((ite: any) => {
      this.items = ite;
    });
  }

  onFileSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.newItem.file = inputElement.files[0];
    } else {
      this.newItem.file = null;
    }
  }

  addNewItem() {
    const formData = new FormData();
  formData.append('item_name', this.newItem.item_name);
  formData.append('item_quantity', this.newItem.item_quantity);
  formData.append('item_description', this.newItem.item_description);
  formData.append('file', this.newItem.file);

  this.itemService.createItem(formData).subscribe(
    (response: any) => {
      console.log('Item added successfully.', response);
      this.newItem = {}; 
      this.getAllItems();
    },
    (error: any) => {
      console.error('Error adding item:', error);
    }
  );
  }

  deleteItem(id: number) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.itemService.deleteItem(id).subscribe(
        (response: any) => {
          console.log('Item deleted successfully.', response);
          this.getAllItems();
        },
        (error: any) => {
          console.error('Error deleting item:', error);
        }
      );
    }
  }
  
  
}
