import { Component, DoCheck, OnChanges, SimpleChanges } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import { AuthService } from "src/app/services/Auth/auth.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: 'auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements DoCheck {

    showPassword: boolean = false;
    phoneLogin: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private toast: HotToastService,
        private userService: UserService
    ) { }
    ngDoCheck(): void {
        if (this.phoneLogin) {
            console.log('htosdf');
            this.email?.removeValidators([Validators.email])
            this.email?.addValidators([Validators.maxLength(10)])
        }
        else if (!this.phoneLogin) {
            this.email?.removeValidators([Validators.maxLength(10)]);
            this.email?.addValidators([Validators.email])
        }
    }

    loginForm = new FormGroup<any>({
        'email': new FormControl('', [Validators.required]),
        'password': new FormControl('', Validators.required)
    });

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('passowrd')
    }

    onSubmit = () => {
        let { email, password } = this.loginForm.value;
        this.authService.login(email, password).pipe(
            this.toast.observe({
                success: 'Logged in successfully!',
                loading: 'Logging in....',
                error: 'Invalid Email or password!'
            })
        ).subscribe(() => {
            this.router.navigate(['/dashboard']);
        })
    }
}