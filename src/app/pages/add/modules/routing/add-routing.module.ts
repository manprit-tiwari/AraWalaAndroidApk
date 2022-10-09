import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "../../add.component";
import { AddSubCategoryComponent } from "../../components/main-sub-category/main-sub-category.component";
import { AddCourseComponent } from "../../components/add-course/add-course.component";
import { AddMainComponent } from "../../components/main/main.component";
import { AddCourseCategoryComponent } from "../../components/add-course-category/add-course-category.component";
import { AddCourseSubCategoryComponent } from "../../components/add-course-sub-category/add-course-sub-category.component";

const routes: Routes = [
    {
        path: '',
        component: AddComponent,
        children: [
            {
                path: '',
                component: AddMainComponent
            },
            {
                path: 'sub-category/:category',
                component: AddSubCategoryComponent
            },
            {
                path: 'new-course',
                component: AddCourseComponent
            },
            {
                path: 'new-course-category',
                component: AddCourseCategoryComponent
            },
            {
                path: 'new-course-sub-category',
                component: AddCourseSubCategoryComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AddRoutingModule { }