import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddComponent } from "./add.component";
import { AddSubCategoryComponent } from "./components/main-sub-category/main-sub-category.component";
import { AddCourseComponent } from "./components/add-course/add-course.component";
import { AddMainComponent } from "./components/main/main.component";
import { AddMaterialsModule } from "./modules/material/add-material.module";
import { AddRoutingModule } from "./modules/routing/add-routing.module";

@NgModule({
    declarations: [
        AddComponent,
        AddMainComponent,
        AddCourseComponent,
        AddSubCategoryComponent
    ],
    imports: [
        CommonModule,
        AddRoutingModule,
        AddMaterialsModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class AddModule { }