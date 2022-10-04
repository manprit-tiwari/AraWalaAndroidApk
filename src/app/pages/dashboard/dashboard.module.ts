import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./modules/routing/dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardMaterialModule } from "./modules/material/dashboard-material.module";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DashboardMaterialModule
    ],
    exports: []
})

export class DashboardModule { }