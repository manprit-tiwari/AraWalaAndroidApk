import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

    courseThumbnail!: File;
    courseVedio!: File;
    previewVedio!: any;

    addCourseForm = new FormGroup<any>({
        'title': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required),
        'category': new FormControl('', Validators.required),
        'sub-category': new FormControl('', Validators.required)
    })

    onThumbnailChange = (event: any) => {
        this.courseThumbnail = event.target.files[0];
        console.log(this.courseThumbnail);
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
        console.log('FormData::', formData);
        console.log('FormValues::', this.addCourseForm.value);
    }
}