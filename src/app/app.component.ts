import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './models/task';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    public tasks: WritableSignal<Task[]> = signal([
        {
            title: 'Install Angular Cli',
            completed: false
        },
        {
            title: 'Create project',
            completed: false
        },
        {
            title: 'Create component',
            completed: false
        }
    ])
}
