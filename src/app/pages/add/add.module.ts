import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddComponent } from "./add.component";
import { AddSubCategoryComponent } from "./components/main-sub-category/main-sub-category.component";
import { AddCourseComponent } from "./components/add-course/add-course.component";
import { AddMainComponent } from "./components/main/main.component";
import { AddMaterialsModule } from "./modules/material/add-material.module";
import { AddRoutingModule } from "./modules/routing/add-routing.module";
import { AddCourseCategoryComponent } from "./components/add-course-category/add-course-category.component";
import { AddCourseSubCategoryComponent } from "./components/add-course-sub-category/add-course-sub-category.component";
import { AddService } from "./service/add.service";
import { AddCourseService } from "./service/add-course/add-course.service";
import { AddCourseCategoryService } from "./service/add-course-category/add-course-category.service";
import { AddCourseSubCategoryService } from "./service/add-course-sub-category/add-course-sub-category.service";

@NgModule({
    declarations: [
        AddComponent,
        AddMainComponent,
        AddCourseComponent,
        AddSubCategoryComponent,
        AddCourseCategoryComponent,
        AddCourseSubCategoryComponent
    ],
    imports: [
        CommonModule,
        AddRoutingModule,
        AddMaterialsModule,
        ReactiveFormsModule
    ],
    providers: [AddService, AddCourseService, AddCourseCategoryService, AddCourseSubCategoryService],
    exports: []
})
export class AddModule { }