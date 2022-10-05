import { ChangeDetectorRef, Component } from "@angular/core";
import { getDownloadURL, ref, Storage, uploadBytesResumable } from "@angular/fire/storage";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import { UserService } from "src/app/services/user/user.service";
import { AddCourseService } from "../../service/add-course/add-course.service";

@Component({
    selector: 'add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

    courseThumbnail!: File;
    courseVedio!: File;
    previewVedio!: any;
    UploadingVedio: boolean = false;
    UploadingProgress: number = 0;

    constructor(
        private userService: UserService,
        private addCourseService: AddCourseService,
        private toast: HotToastService,
        private storage: Storage,
        private cd: ChangeDetectorRef
    ) { }

    addCourseForm = new FormGroup<any>({
        'title': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required),
        'category': new FormControl('', Validators.required),
        'sub-category': new FormControl('', Validators.required)
    })

    onThumbnailChange = (event: any) => {
        this.courseThumbnail = event.target.files[0];
    }

    onVedioChange = (event: any) => {
        this.courseVedio = event.target.files[0];
        console.log(this.courseVedio);
    }

    appendFormData = () => {
        let formData = new FormData();
        for (let field of Object.keys(this.addCourseForm)) {
            formData.append(field, this.addCourseForm.value?.[field])
        }
        formData.append('thumbnail', this.courseThumbnail);
        formData.append('vedio', this.courseVedio);

        return formData;
    }

    onSubmit = () => {
        let formData = this.appendFormData();
        // console.log('FormData::', formData);
        // console.log('FormValues::', this.addCourseForm.value);
        this.addCourseService.addCourse(this.addCourseForm.value).pipe(
            this.toast.observe(
                {
                    success: 'Couser Info Added Successfully!',
                    loading: 'adding Course...',
                    error: ({ error }) => `${error.message}`
                }
            )
        ).subscribe((result) => {
            let courseInfo: any = { id: result.id };
            this.addCourseService.uploadCourseThumbnail(this.courseThumbnail, `courses/thumbnail/${courseInfo.id}`).pipe(
                this.toast.observe(
                    {
                        success: 'Thumbnail uploaded Successfully',
                        loading: 'Uploading Thumbnail...',
                        error: ({ error }) => `${error.message}`
                    }
                )
            ).subscribe((result) => {
                courseInfo = { ...courseInfo, thumbnailURL: result };
                let storageRef = ref(this.storage, `courses/vedios/${courseInfo.id}`);
                let uploadTask = uploadBytesResumable(storageRef, this.courseVedio);
                this.UploadingVedio = true;
                uploadTask.on('state_changed', (snapshot) => {
                    this.UploadingProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.toast.loading('Uploading Vedio...', { id: 'vedioUploading' });
                }, () => {
                    this.toast.error('Error while uploadin Vedio');
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((result) => {
                        courseInfo = { ...courseInfo, vedioURL: result };
                        this.addCourseService.updateCourse(courseInfo).subscribe(() => {
                            this.UploadingVedio = false;
                            this.toast.close('vedioUploading');
                            this.toast.success('Vedio uploaded Successfully');
                        });
                    }).catch(() => {
                        this.UploadingVedio = false;
                        this.toast.close('vedioUploading');
                        this.toast.error('Error while uploading course');
                    })
                })
            });
        });
    }
}