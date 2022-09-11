import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() {
  }

  @Input()
  course: Course;
  @Input()
  cardIndex: number
  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void {
  }

  isImageIsVisible() {
    return this.course && this.course.iconUrl
  }

  cardClasses() {
   return this.course.category === 'BEGINNER' ?
     'beginner':
     ''
  }

  cardStyle() {
    return this.course.category === 'BEGINNER' &&
      {'text-decoration': 'underline'}

  }
}
