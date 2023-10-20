import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  endPoint = 'http://localhost:8080/api/items';

  constructor(private httpClient: HttpClient) {}

  getItems() {
    return this.httpClient.get(this.endPoint);
  }

  createItem(formData: FormData) {
    return this.httpClient.post(this.endPoint, formData);
  }
  deleteItem(id: number) {
    const url = `${this.endPoint}/${id}`;
    return this.httpClient.delete(url);
  }
  
}
