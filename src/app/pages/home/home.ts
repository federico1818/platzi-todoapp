import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.css'
})

export class Home {
    protected tasks: string[] = [
        'Task 1',
        'Task 2'
    ];
}