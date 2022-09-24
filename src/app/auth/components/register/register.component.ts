import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
    selector: 'auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    showPassword: boolean = false;

    constructor() { }

    comparePassword = (): ValidatorFn => {
        return (control: AbstractControl): ValidationErrors | null => {
            let password = control.get('password')?.value;
            let confirmPassword = control.get('confirmPassword')?.value;

            if (password && confirmPassword && password !== confirmPassword) {
                return {
                    passwordDontMatch: true
                }
            }
            return null;
        }
    }

    registerForm = new FormGroup({
        'firstName': new FormControl('', Validators.required),
        'lastName': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'phoneNo': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
        'confirmPassword': new FormControl('', [Validators.required])
    }, { validators: this.comparePassword() })


    get password() {
        return this.registerForm.get('password');
    }
    get confirmPassword() {
        return this.registerForm.get('confirmPassword');
    }

    onSubmit = () => {

    }
}