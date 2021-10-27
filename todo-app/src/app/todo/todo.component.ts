import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  displayAll: boolean = false;

  constructor() { }

  todoModel = new Model()


  getName() {
    return this.todoModel.name
  };

  getItems() {
    if(this.displayAll) {
      return this.todoModel.items
    }
    return this.todoModel.items.filter(item => item.status === false);
  }

  addItem(value: string) {
    if(value != '') {
      this.todoModel.items.push({description: value, status: false});
    } else {
      alert('todo boş gönderilemez');
    }
  }
}
