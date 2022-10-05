import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "../../add.component";
import { AddSubCategoryComponent } from "../../components/main-sub-category/main-sub-category.component";
import { AddCourseComponent } from "../../components/add-course/add-course.component";
import { AddMainComponent } from "../../components/main/main.component";
import { AddCourseCategoryComponent } from "../../components/add-course-category/add-course-category.component";

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