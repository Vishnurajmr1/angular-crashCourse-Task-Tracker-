import { Component, Input ,OnInit,Output,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task|undefined;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();
  faTimes=faTimes;
  constructor(){};
  ngOnInit(): void {}
  onDelete(task:any):void{
    this.onDeleteTask.emit(task);
  }
  onToggle(task:any):void{
    this.onToggleReminder.emit(task);
  }
  
}
