import { Injectable } from "@angular/core";
import { courseCategory } from "../model/course-category.model";
import { CourseSubCategory } from "../model/course-sub-category.model";
import { CourseVedio } from "../model/course-vedio.model";

@Injectable({
    providedIn: 'platform'
})
export class CourseService {

    courseCategory: courseCategory[] = [
        {
            id: '1',
            name: 'Aganiveer',
            imageURL: 'assets/images/aganiveer.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            numberOfSubCategory: 3
        },
        {
            id: '2',
            name: 'Defence',
            imageURL: 'assets/images/defence.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            numberOfSubCategory: 3
        },
        {
            id: '3',
            name: 'NDA',
            imageURL: 'assets/images/nda.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            numberOfSubCategory: 3
        }
    ];

    courseSubCategory: CourseSubCategory[] = [
        {
            id: '1',
            name: 'Air Force',
            imageURL: 'assets/images/aganiveer.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            categoryId: '1',
            numberOfVedios: 3
        },
        {
            id: '2',
            name: 'Neavy',
            imageURL: 'assets/images/aganiveer.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            categoryId: '1',
            numberOfVedios: 3
        },
        {
            id: '3',
            name: 'Military',
            imageURL: 'assets/images/aganiveer.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            categoryId: '1',
            numberOfVedios: 3
        },
        {
            id: '4',
            name: 'Intelligence',
            imageURL: 'assets/images/aganiveer.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            categoryId: '2',
            numberOfVedios: 3
        },
        {
            id: '5',
            name: 'RAW',
            imageURL: 'assets/images/aganiveer.jpg',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            categoryId: '2',
            numberOfVedios: 3
        },
    ];

    courseVedio: CourseVedio[] = [
        {
            id: '1',
            name: 'First Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '1'
        },
        {
            id: '2',
            name: 'Second Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '2'
        },
        {
            id: '3',
            name: 'Third Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '3'
        },
        {
            id: '4',
            name: 'Fourth Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '4'
        },
        {
            id: '5',
            name: 'Fifth Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '5'
        },
        {
            id: '6',
            name: 'Sixth Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '1'
        },
        {
            id: '7',
            name: 'Seventh Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '2'
        },
        {
            id: '8',
            name: 'Eighth Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '1'
        },
        {
            id: '9',
            name: 'Nineth Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '1'
        },
        {
            id: '10',
            name: 'Tenth Course',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis dolorum omnis accusamus excepturi vero? Voluptatibus consequatur at tenetur ipsa iste, quidem minus fugiat! Eligendiillo non accusamus eum recusandae!',
            thumbnailURL: 'assets/images/aganiveer.jpg',
            vedioURL: 'assets/images/aganiveer.jpg',
            subCategoryId: '2'
        },
    ]

}