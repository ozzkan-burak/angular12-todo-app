import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor() { }

  private name= "Burak";

  // items = [
  //   "item 1", "item 2", "item 3"
  // ]

  items = [
    {description: "kahvaltı", status: "yes"},
    {description: "spor", status: "yes"},
    {description: "alışveriş", status: "no"}
  ]

  getName() {
    return this.name
  }
}
