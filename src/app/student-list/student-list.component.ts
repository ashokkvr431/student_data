import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from '../coreservices/studentservices.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  
  constructor(private studentService: StudentservicesService) { }

  ngOnInit(): void {
  console.log('StudentListComponent initialized');

  this.studentService.getStudents().subscribe(
    (data: any) => {
      console.log('API response:', data);
      this.students = data;
    },
    (error: any) => {
      console.error('Error loading students:', error);
      this.students = [];
    }
  );
}
}
