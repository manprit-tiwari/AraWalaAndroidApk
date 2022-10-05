import { Injectable } from '@angular/core';




@Injectable({
    providedIn: 'any'
})
export class AddService {
    categories: any[] = [
        {
            name: 'Course',
            subCategory: ['New Course', 'New Sub-Category', 'New Course-Category']
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