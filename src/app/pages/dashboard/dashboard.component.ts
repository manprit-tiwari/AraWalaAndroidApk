import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/Auth/auth.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: 'pages-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    user$ = this.userService.currentUserProfile$;

    constructor(private userService: UserService) { }

}