import { Component } from "@angular/core";

@Component({
    selector: 'course-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CourseCategoryComponent {
    courseCategories: string[] = ['Defence', 'NDA', 'UPSC'];
    // courseCategories: string[] = [];
}