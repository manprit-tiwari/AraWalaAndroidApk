import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { concatMap } from "rxjs";
import { userData } from "src/app/models/user-data/user-data.model";
import { AuthService } from "src/app/services/Auth/auth.service";
import { UserService } from "src/app/services/user/user.service";

@UntilDestroy()
@Component({
    selector: 'pages-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    editMode: boolean = false;
    user$ = this.userService.currentUserProfile$;

    profileForm = new FormGroup<any>({
        'uid': new FormControl(''),
        'displayName': new FormControl('', Validators.required),
        'email': new FormControl('', Validators.required),
        'phoneNo': new FormControl('', Validators.required),
    })

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private toast: HotToastService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.userService.currentUserProfile$.pipe(
            untilDestroyed(this)
        ).subscribe((user) => {
            this.profileForm.patchValue({ ...user });
            this.profileForm.disable();
        })
    }

    uploadImage = (event: any, user: userData) => {
        console.log('Files::', event.target.files)
        console.log('userId::', user.uid);
        this.userService.uploadProfileImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
            this.toast.observe(
                {
                    success: 'Image uploaded successfully!',
                    loading: 'Image is being uploaded...',
                    error: 'There was an error in uploading Image.'
                }
            ),
            concatMap((photoURL) => this.userService.updateUser({ uid: user.uid, photoURL }))
        ).subscribe();
    }

    saveProfile = () => {
        let profileData = this.profileForm.value;
        this.userService.updateUser(profileData).pipe(
            this.toast.observe(
                {
                    success: 'User data has been updated',
                    loading: 'Updating User data...',
                    error: 'Error while updating user data'
                }
            )
        ).subscribe(() => {
            this.profileForm.disable();
            this.editMode = false;
        });
    }

    enableEditMode = () => {
        this.profileForm.enable();
        this.profileForm.get('email')?.disable();
        this.editMode = true;
    }

    logout = () => {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/auth/login']);
        })
    }

    cancelUpdate = () => {
        this.profileForm.disable();
        this.editMode = false;
    }

}