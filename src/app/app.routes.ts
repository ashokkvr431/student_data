import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';

export const routes: Routes = [
  { path: '', 
    loadComponent: () => import('./student-list/student-list.component').then(m => m.StudentListComponent)
  }
];
