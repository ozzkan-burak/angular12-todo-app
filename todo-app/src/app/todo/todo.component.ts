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

  constructor() {
    this.todoModel.items = this.getItemsFromLocalStorage();
  }

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
      let data = {description: this.inputText, status: false}
      this.todoModel.items.push(data);

      let items = this.getItemsFromLocalStorage();
      items.push(data)

      localStorage.setItem("items", JSON.stringify(items))
      this.inputText = '';
    } else {
      alert('todo boş gönderilemez');
    }
  }

  getItemsFromLocalStorage() {
    let items: TodoItem[] = []

    let value = localStorage.getItem("items");

    if(value != null) {
      items = JSON.parse(value);
    }

    return items
  }

  onActionChanged(item:TodoItem) {
    let items = this.getItemsFromLocalStorage();

    localStorage.clear();

    items.forEach(i => {
      if(i.description == item.description) {
        i.status = item.status
      }
    });

    localStorage.setItem("items", JSON.stringify(items));
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
