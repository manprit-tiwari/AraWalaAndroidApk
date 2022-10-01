import { Component } from "@angular/core";

@Component({
    selector: 'course-sub-category',
    templateUrl: './sub-category.component.html',
    styleUrls: ['./sub-category.component.scss']
})
export class CourseSubCategoryComponent {
    subCategories: string[] = ['Air Force', 'Neavy', 'Army'];
}