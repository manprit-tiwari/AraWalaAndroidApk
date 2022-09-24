import { Routes } from "@angular/router";

const Routing: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => {
            return import('./dashboard/dashboard.module').then((m) => m.DashboardModule);
        }
    }
];

export default Routing