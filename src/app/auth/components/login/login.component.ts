import { Component, DoCheck, OnChanges, SimpleChanges } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements DoCheck {

    showPassword: boolean = false;
    phoneLogin: boolean = false;

    constructor() { }
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

    loginForm = new FormGroup({
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
        console.log(this.loginForm)
    }
}