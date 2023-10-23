import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UpdateItemComponent } from '../components/update-item/update-item.component';

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
  newItemForm: FormGroup;

  constructor(private itemService: ItemService, private router: Router, private modalController: ModalController, private formBuilder: FormBuilder) {
    this.newItemForm = this.formBuilder.group({
      item_name: ['', Validators.required],
      item_quantity: ['', Validators.required],
      item_description: ['', Validators.required],
      file: [null], 
    });
  }
  
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
      this.newItemForm.get('file')?.setValue(inputElement.files[0]);
    } else {
      this.newItemForm.get('file')?.setValue(null);
    }
  }
  

  addNewItem() {
    if (this.newItemForm.valid) {
      const formData = new FormData();
      formData.append('item_name', this.newItemForm.get('item_name')?.value);
      formData.append('item_quantity', this.newItemForm.get('item_quantity')?.value);
      formData.append('item_description', this.newItemForm.get('item_description')?.value);
      
      const fileControl = this.newItemForm.get('file');
      if (fileControl) {
        const file = fileControl.value;
        if (file) {
          formData.append('file', file);
        }
      }
  
      this.itemService.createItem(formData).subscribe(
        (response: any) => {
          console.log('Item added successfully.', response);
          this.getAllItems();
        },
        (error: any) => {
          console.error('Error adding item:', error);
        }
      );
    }
  }
  
  
  
  
  
  
  deleteItem(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
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

  async openUpdatePopup() {
    const modal = await this.modalController.create({
      component: UpdateItemComponent, // El componente a mostrar en la ventana emergente
      componentProps: {} // Parámetros que puedes pasar al componente si es necesario
    });
    return await modal.present();
  }
  
}
