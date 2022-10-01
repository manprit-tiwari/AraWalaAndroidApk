import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "../../add.component";
import { AddCourseComponent } from "../../components/add-course/add-course.component";
import { AddMainComponent } from "../../components/main/main.component";

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
                path: 'course',
                component: AddCourseComponent
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