import { TodoItem } from "./todoItem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name= 'Burak';
    this.items = [
      {description: "kahvaltı", status: "yes"},
      {description: "spor", status: "yes"},
      {description: "alışveriş", status: "no"},
    ]
  }
}
