import {Component, OnInit} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  courses: Course[] = COURSES;
  singleCourse = COURSES[0]
  course: Course = {
    id:0,
    description:'',
    iconUrl: '',
    longDescription: '',
    category:'',
    lessonsCount:0
  };
  startDate = new Date(2000, 0, 1);
  title = COURSES[0].description;
  price = 9.653434;
  rate = 0.67


  onCourseSelected(course: Course) {
    this.course = course
  }

}
