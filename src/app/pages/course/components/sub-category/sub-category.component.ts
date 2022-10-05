import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseSubCategory } from "../../model/course-sub-category.model";
import { CourseService } from "../../service/course.service";

@Component({
    selector: 'course-sub-category',
    templateUrl: './sub-category.component.html',
    styleUrls: ['./sub-category.component.scss']
})
export class CourseSubCategoryComponent implements OnInit {

    courseSubCategory: CourseSubCategory[] = [];

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params?.['id'];
        if (id) {
            this.courseService.courseSubCategory.find((subCategory) => {
                if (subCategory.categoryId === id) {
                    this.courseSubCategory.push(subCategory);
                }
            })
        }
    }

    subCategorySelected = (id: string) => {
        this.router.navigate(['/course', 'course-vedio-list', id]);
    }
}