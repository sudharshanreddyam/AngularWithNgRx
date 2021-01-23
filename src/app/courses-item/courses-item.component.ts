import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteHandler = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(id: string): void {
    this.deleteHandler.emit(id);
  }
}
