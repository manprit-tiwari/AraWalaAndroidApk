import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from "./modules/routing/profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule
    ],
    exports: []
})
export class ProfileModule { }