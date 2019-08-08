import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = [ 
    {task: "fold clothes", completed: true},
    {task: "pet sweetpea", completed: true},
    {task: "wash clothes", completed: false},
    {task: "clean dishes", completed: false},
    {task: "buy gas", completed: true},
    {task: "do homework", completed: true},
]

  constructor() { }

  ngOnInit() {
  }

}
