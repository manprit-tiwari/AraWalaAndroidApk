import { NgModule } from "@angular/core";
import { MatRippleModule } from "@angular/material/core";

const material = [
    MatRippleModule
]

@NgModule({
    imports: [material],
    exports: [material]
})
export class DashboardMaterialModule { }