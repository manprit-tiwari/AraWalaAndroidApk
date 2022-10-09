import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import { AddCourseSubCategoryService } from "../../service/add-course-sub-category/add-course-sub-category.service";

@Component({
    selector: 'add-course-sub-category',
    templateUrl: './add-course-sub-category.component.html',
    styleUrls: ['./add-course-sub-category.component.scss'],
})
export class AddCourseSubCategoryComponent {

    image!: File;

    constructor(
        private addCourseSubCategoryService: AddCourseSubCategoryService,
        private toast: HotToastService
    ) { }

    addCouserSubCategoryForm = new FormGroup<any>({
        'title': new FormControl(''),
        'discription': new FormControl('')
    })

    onImageChange = (event: any) => {
        this.image = event.target?.files[0];
    }

    onSubmit = (): void => {
        this.addCourseSubCategoryService.addCourseSubCategory(this.addCouserSubCategoryForm.value).pipe(
            this.toast.observe(
                {
                    success: 'Couser sub Category Added Successfully',
                    loading: 'Adding Course sub-category...',
                    error: ({ error }) => `${error.message}`
                }
            )
        ).subscribe((result) => {
            let subCategoryInfo: any = { id: result.id };
            this.addCourseSubCategoryService.uploadSubCategoryImage(this.image, `courses/sub-category/${subCategoryInfo.id}`).pipe(
                this.toast.observe(
                    {
                        success: 'Image Uploaded Successfully',
                        loading: 'Uploading Image...',
                        error: ({ error }) => `${error.message}`
                    }
                )
            ).subscribe((result) => {
                subCategoryInfo = { ...subCategoryInfo, imageURL: result };
                this.addCourseSubCategoryService.updateCourseSubCategory(subCategoryInfo).subscribe();
            })
        })
    }
}