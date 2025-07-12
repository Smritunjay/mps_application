import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'task',
        loadComponent: () => import('./pages/components/task/task').then(m => m.TaskComponent)
    },
];
