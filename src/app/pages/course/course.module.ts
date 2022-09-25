import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './modules/routing/course-routing.module';

@NgModule({
    declarations: [
        CourseComponent
    ],
    imports: [
        CommonModule,
        CourseRoutingModule
    ],
    exports: []
})
export class CourseModule { }