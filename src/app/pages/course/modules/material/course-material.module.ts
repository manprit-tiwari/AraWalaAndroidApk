import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";

const material = [
    MatButtonModule,
    MatIconModule,
    MatRippleModule
];

@NgModule({
    imports: [material],
    exports: [material]
})
export class CourseMaterialModule { }