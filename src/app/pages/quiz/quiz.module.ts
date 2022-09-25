import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuizRoutingModule } from './modules/routing/quiz-routing.module';
import { QuizComponent } from './quiz.component';

@NgModule({
    declarations: [
        QuizComponent
    ],
    imports: [
        CommonModule,
        QuizRoutingModule
    ],
    exports: []
})
export class QuizModule { }