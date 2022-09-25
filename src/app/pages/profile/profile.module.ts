import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileMaterialModule } from "./modules/material/profile-material.module";
import { ProfileRoutingModule } from "./modules/routing/profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ProfileMaterialModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class ProfileModule { }