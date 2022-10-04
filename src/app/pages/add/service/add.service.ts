import { Injectable } from '@angular/core';
import { AddCategory } from '../model/add-category.model';



@Injectable({
    providedIn: 'any'
})
export class AddService {
    categories: AddCategory[] = [
        {
            name: 'Course',
            subCategory: ['New Course', 'New Sub-Category', 'New Category']
        },
        {
            name: 'User',
            subCategory: ['New Student', 'New Admin', 'New Developer']
        },
        {
            name: 'Quiz'
        }
    ];

}