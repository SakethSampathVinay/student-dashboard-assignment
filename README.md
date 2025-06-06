# 🎓 Student Dashboard App

A simple Angular app that allows users to add students, view a list of students, and see dynamic messages and styling based on student grades.

## 🚀 Overview

The **Student Dashboard** is a basic Angular project built for learning and practicing core Angular concepts such as:

- Two-way data binding
- Event handling
- Built-in structural directives (`*ngIf`, `*ngFor`, `ngSwitch`)
- Conditional styling using `ngClass`

## 🎯 Objective

To build a working application that reinforces Angular fundamentals through:

- Handling form inputs
- Conditionally rendering UI elements
- Applying styles dynamically based on logic
- Practicing Angular template syntax

## 📸 Demo

> 💡 Sample Input:
Name: John
Grade: A

> 📋 Output after clicking **Add Student**:


---

## 🛠️ Features & Functionality

### ✅ Add Student Form
- Input fields for:
  - Student Name
  - Student Grade
- Two-way binding using `[(ngModel)]`
- Event binding on button `(click)` to add the student
- Template reference variables (`#ref`) used to reset inputs after adding

### ✅ Student List
- Rendered using `*ngFor`
- Each student shows name, grade, and a grade-specific badge

### ✅ Conditional Messages
- Show `"No students were found."` when the student list is empty using `*ngIf`

### ✅ Grade Badge using `ngSwitch`
- A → 🟢 Excellent  
- B → 🟡 Good  
- C → 🔴 Needs Improvement  
- Other → ⚪ Not Categorized

### ✅ Dynamic Styling with `ngClass`
- Green for Grade A  
- Orange for Grade B  
- Red for Grade C  
- Gray for others

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── student/
│   │   ├── student.component.ts
│   │   ├── student.component.html
│   │   ├── student.component.css
│   └── app.component.ts
│   └── app.component.html
├── assets/
├── index.html
└── main.ts
