import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContentComponent } from "./components/content/content.component";
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./modules/routing/layout-routing.module";

@NgModule({
    declarations: [
        LayoutComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    exports: []
})

export class LayoutModule { }