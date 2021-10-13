import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor() { }

  private name: string = "Burak";

  // items: TodoItem[] = [
  //   new TodoItem("kahvaltı", "yes"),
  //   new TodoItem("spor", "yes"),
  //   new TodoItem("alışveriş", "no")
  // ]

  items: TodoItem[] = [
    {description: "kahvaltı", status: "yes"},
    {description: "spor", status: "yes"},
    {description: "alışveriş", status: "no"},
  ]


  getName() {
    return this.name
  }
}
