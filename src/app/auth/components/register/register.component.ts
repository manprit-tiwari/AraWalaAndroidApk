import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import { switchMap } from "rxjs";
import { AuthService } from "src/app/services/Auth/auth.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: 'auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    showPassword: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private userService: UserService,
        private toast: HotToastService
    ) { }

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

    registerForm = new FormGroup<any>({
        'name': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', Validators.required),
        'confirmPassword': new FormControl('', [Validators.required])
    }, { validators: this.comparePassword() })


    get name() {
        return this.registerForm.get('name');
    }
    get email() {
        return this.registerForm.get('email');
    }
    get password() {
        return this.registerForm.get('password');
    }
    get confirmPassword() {
        return this.registerForm.get('confirmPassword');
    }

    onSubmit = () => {
        let { name, email, password } = this.registerForm.value;
        this.userService.createUser(email, password).pipe(
            switchMap(({ user: { uid } }) => this.userService.addUser({ uid, email, displayName: name })),
            this.toast.observe({
                success: 'Congrats! you are all signed up',
                loading: 'Signing in......',
                error: 'Something went wrong during registration'
            })
        ).subscribe((result: any) => {
            console.log(result);
            this.router.navigate(['/dashboard']);
        })
    }
}