import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el ID de la ruta
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Asegúrate de importar FormGroup y Validators
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss'],
})
export class UpdateItemComponent implements OnInit {
  updateItemForm: FormGroup; // Asegúrate de que tengas un FormGroup definido para el formulario de actualización

  constructor(private itemService: ItemService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.updateItemForm = this.formBuilder.group({
      item_name: ['', Validators.required],
      item_quantity: ['', Validators.required],
      item_description: ['', Validators.required],
    });
  }

  ngOnInit() {
    const itemId = this.route.snapshot.params['id']; // Obtener el ID del elemento desde la ruta
    this.itemService.getItemById(itemId).subscribe((item: any) => {
      this.updateItemForm.patchValue(item); // Rellenar el formulario con los datos existentes
    });
  }

  // Agrega el método updateItem aquí
}
