import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AddCategory } from "../../model/add-category.model";
import { AddService } from "../../service/add.service";

@Component({
    selector: 'add-course-main',
    templateUrl: './main-sub-category.component.html',
    styleUrls: ['./main-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {

    categoryList: AddCategory[] = this.addService.categories;
    category!: string;

    constructor(
        private route: ActivatedRoute,
        private addService: AddService
    ) { }

    ngOnInit(): void {
        this.category = this.route.snapshot.params?.['category'];
    }

}