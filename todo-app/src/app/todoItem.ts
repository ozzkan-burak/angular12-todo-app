// export class TodoItem {
//   description: string;
//   action: string;

//   constructor(description: string, action: string){
//     this.description = description;
//     this.action = action;
//   }
// }


// export class TodoItem {

//   constructor(public description: string, public status: string){
//     this.description = description;
//     this.status = status;
//   }
// }


export interface TodoItem {
  description: string;
  status: string;
}
