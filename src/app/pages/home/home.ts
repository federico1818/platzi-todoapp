import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.css'
})

export class Home {
    public tasks: string[] = [
        'Task 1',
        'Task 2'
    ];
    public onClick(): void {
        alert('On Click')
    }
}