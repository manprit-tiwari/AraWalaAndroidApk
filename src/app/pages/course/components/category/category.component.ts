import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { courseCategory } from "../../model/course-category.model";
import { CourseService } from "../../service/course.service";

@Component({
    selector: 'course-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CourseCategoryComponent {
    courseCategories: courseCategory[] = this.courseService.courseCategory;
    constructor(
        private courseService: CourseService,
        private router: Router
    ) { }
    // courseCategories: string[] = [];

    categorySelected = (id: string) => {
        this.router.navigate(['/course', 'sub-categories', id])
    }

}