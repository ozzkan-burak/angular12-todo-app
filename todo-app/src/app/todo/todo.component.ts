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
  inputText: string = "";

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

  addItem() {
    if(this.inputText!= '') {
      this.todoModel.items.push({description: this.inputText, status: false});
      this.inputText = '';
    } else {
      alert('todo boş gönderilemez');
    }
  }

  displayCount() {
    return this.todoModel.items.filter(i => i.status).length;
  }

  getBtnClasses() {
    return{
      'disabled': this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0
    }
  }
}
