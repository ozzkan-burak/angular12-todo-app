import { TodoItem } from "./todoItem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name= 'Burak';
    this.items = [
      {description: "kahvaltı", status: true},
      {description: "spor", status: true},
      {description: "alışveriş", status: false},
    ]
  }
}
