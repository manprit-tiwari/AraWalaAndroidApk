import { Injectable } from '@angular/core';




@Injectable({
    providedIn: 'platform'
})
export class AddService {
    categories: any[] = [
        {
            name: 'Course',
            subCategory: ['New Course', 'New Course Sub Category', 'New Course Category']
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