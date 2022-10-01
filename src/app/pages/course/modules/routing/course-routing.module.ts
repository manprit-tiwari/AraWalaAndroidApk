import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCategoryComponent } from '../../components/category/category.component';
import { CourseVedioListComponent } from '../../components/course-vedio-list/course-vedio-list.component';
import { CourseSubCategoryComponent } from '../../components/sub-category/sub-category.component';
import { CourseComponent } from '../../course.component';

const routes: Routes = [
    {
        path: '',
        component: CourseComponent,
        children: [
            {
                path: '',
                redirectTo: 'categories',
                pathMatch: 'full'
            },
            {
                path: 'categories',
                component: CourseCategoryComponent
            },
            {
                path: 'sub-categories',
                component: CourseSubCategoryComponent
            },
            {
                path: 'course-vedio-list',
                component: CourseVedioListComponent
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
export class CourseRoutingModule { }