import { Routes } from "@angular/router";

const Routing: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => {
            return import('./dashboard/dashboard.module').then((m) => m.DashboardModule);
        }
    },
    {
        path: 'profile',
        loadChildren: () => {
            return import('./profile/profile.module').then((m) => m.ProfileModule);
        }
    },
    {
        path: 'quiz',
        loadChildren: () => {
            return import('./quiz/quiz.module').then((m) => m.QuizModule);
        }
    },
    {
        path: 'course',
        loadChildren: () => {
            return import('./course/course.module').then((m) => m.CourseModule);
        }
    },
    {
        path: 'add',
        loadChildren: () => {
            return import('./add/add.module').then((m) => m.AddModule);
        }
    }
];

export default Routing