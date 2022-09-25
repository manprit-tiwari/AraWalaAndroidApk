import { Component, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'layout-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements DoCheck {

    homeActive: boolean = false;
    courseActive: boolean = false;
    quizActive: boolean = false;
    profileActive: boolean = false;
    homeIcon!: string;
    courseIcon!: string;
    quizIcon!: string;
    profileIcon!: string;

    constructor(private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) { }

    ngDoCheck(): void {
        this.homeIcon = `assets/icons/home${(this.homeActive === true) ? '-fill' : ''}.png`;
        this.courseIcon = `assets/icons/course${(this.courseActive === true) ? '-fill' : ''}.png`;
        this.quizIcon = `assets/icons/quiz${(this.quizActive === true) ? '-fill' : ''}.png`;
        this.profileIcon = `assets/icons/profile${(this.profileActive === true) ? '-fill' : ''}.png`;
        let currentRoute = this.router.url.split('/')[1];
        if (currentRoute === 'dashboard') this.homeActive = true; else this.homeActive = false;
        if (currentRoute === 'course') this.courseActive = true; else this.courseActive = false;
        if (currentRoute === 'quiz') this.quizActive = true; else this.quizActive = false;
        if (currentRoute === 'profile') this.profileActive = true; else this.profileActive = false;
    }

}