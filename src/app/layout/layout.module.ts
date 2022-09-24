import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContentComponent } from "./components/content/content.component";
import { LayoutComponent } from "./layout.component";

@NgModule({
    declarations: [
        LayoutComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: LayoutComponent
            }
        ])
    ],
    exports: []
})

export class LayoutModule { }