import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseCategoryComponent } from './components/category/category.component';
import { CourseVedioListComponent } from './components/course-vedio-list/course-vedio-list.component';
import { CourseSubCategoryComponent } from './components/sub-category/sub-category.component';
import { CourseComponent } from './course.component';
import { CourseMaterialModule } from './modules/material/course-material.module';
import { CourseRoutingModule } from './modules/routing/course-routing.module';

@NgModule({
    declarations: [
        CourseComponent,
        CourseCategoryComponent,
        CourseSubCategoryComponent,
        CourseVedioListComponent
    ],
    imports: [
        CommonModule,
        CourseRoutingModule,
        CourseMaterialModule
    ],
    exports: []
})
export class CourseModule { }