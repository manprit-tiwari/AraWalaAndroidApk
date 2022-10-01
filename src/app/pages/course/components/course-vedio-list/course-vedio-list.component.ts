import { Component } from "@angular/core";

@Component({
    selector: 'course-vedio-list',
    templateUrl: './course-vedio-list.component.html',
    styleUrls: ['./course-vedio-list.component.scss']
})
export class CourseVedioListComponent {
    courseVedioList: {
        name: string,
        thumbnailPath: string,
        duration?: string,
        description?: string
    }[] = [
            {
                name: 'Lesson 1',
                thumbnailPath: '',
                duration: '10',
                description: 'This is My First Lesson for this Course.'
            },
            {
                name: 'Lesson 2',
                thumbnailPath: '',
                duration: '10',
                description: 'This is My First Lesson for this Course.'
            },
            {
                name: 'Lesson 3',
                thumbnailPath: '',
                duration: '10',
                description: 'This is My First Lesson for this Course.'
            },
            {
                name: 'Lesson 4',
                thumbnailPath: '',
                duration: '10',
                description: 'This is My First Lesson for this Course.'
            }
        ];
}