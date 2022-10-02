import { Component } from "@angular/core";

export interface courseCategory {
    name: string,
    subCategoryNumber: number,
    thumbnail: string,
    discription: string
}

@Component({
    selector: 'course-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CourseCategoryComponent {
    courseCategories: courseCategory[] = [
        {
            name: 'Aganiveer',
            subCategoryNumber: 3,
            thumbnail: 'assets/images/aganiveer.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!'
        },
        {
            name: 'Defence',
            subCategoryNumber: 4,
            thumbnail: 'assets/images/defence.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!'
        },
        {
            name: 'NDA',
            subCategoryNumber: 2,
            thumbnail: 'assets/images/nda.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!'
        }
    ]
    // courseCategories: string[] = [];
}