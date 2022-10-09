import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import { AddCourseCategoryService } from "../../service/add-course-category/add-course-category.service";

@Component({
    selector: 'add-course-category',
    templateUrl: './add-course-category.component.html',
    styleUrls: ['./add-course-category.component.scss']
})
export class AddCourseCategoryComponent {

    Image!: File;

    courseCategoryForm = new FormGroup<any>({
        'name': new FormControl('', Validators.required),
        'discription': new FormControl('', Validators.required)
    })

    constructor(
        private addCourseCategoryService: AddCourseCategoryService,
        private toast: HotToastService
    ) { }

    onImgageChange = (event: any) => {
        this.Image = event?.target?.files[0];
    }

    onSubmit = () => {
        this.addCourseCategoryService.addCourseCategory(this.courseCategoryForm.value).pipe(
            this.toast.observe(
                {
                    success: 'Course Category added Successfully',
                    loading: 'Adding Course Category...',
                    error: ({ error }) => `${error.message}`
                }
            )
        ).subscribe((result) => {
            let categoryData: any = { id: result.id };
            this.addCourseCategoryService.uploadCategoryImage(this.Image, `courses/category/${categoryData.id}`).pipe(
                this.toast.observe(
                    {
                        success: 'Image Uploaded Successfully',
                        loading: 'Uploading Image...',
                        error: ({ error }) => `${error.message}`
                    }
                )
            ).subscribe(result => {
                categoryData = { ...categoryData, imageURL: result }
                this.addCourseCategoryService.updateCourseCategory(categoryData).subscribe();
            })
        });
    }
}