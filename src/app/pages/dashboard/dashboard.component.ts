import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/Auth/auth.service";

@Component({
    selector: 'pages-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    logout = () => {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/auth/login']);
        })
    }
}