// src/app/student/student.component.ts
import { CommonModule, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [NgIf, CommonModule, NgSwitch, NgSwitchCase, FormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  studentName: string = '';
  studentGrade: string = '';
  students: { name: string; grade: string }[] = [];

  addStudent(nameRef: HTMLInputElement, gradeRef: HTMLInputElement) {
    if (this.studentName.trim() && this.studentGrade.trim()) {
      this.students.push({
        name: this.studentName,
        grade: this.studentGrade.toUpperCase(),
      });

      nameRef.value = '';
      gradeRef.value = '';
      this.studentName = '';
      this.studentGrade = '';
    }
  }

  getGradeClass(grade: string) {
    switch (grade.toUpperCase()) {
      case 'A':
        return 'grade-a';
      case 'B':
        return 'grade-b';
      case 'C':
        return 'grade-c';
      default:
        return 'grade-default';
    }
  }
}
