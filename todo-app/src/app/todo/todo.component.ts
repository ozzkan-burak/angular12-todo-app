import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  message = "";

  constructor() { }

  todoModel = new Model()


  getName() {
    return this.todoModel.name
  };

  getItems() {
    return this.todoModel.items
  }

  addItem(value: string) {
    if(value != '') {
      this.todoModel.items.push({description: value, status: 'no'});
    } else {
      alert('todo boş gönderilemez');
    }
  }
}
