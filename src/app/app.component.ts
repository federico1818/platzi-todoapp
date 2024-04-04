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

    public deleteTask(index: number): void {
        this.tasks.update((tasks: Task[]) => {
            tasks.splice(index, 1)
            return tasks
        })
    }

    public onChange(event: Event): void {
        const input = event.target as HTMLInputElement
        this.addTask(input.value)
    }

    private addTask(title: string): void {
        this.tasks.update((tasks: Task[]) => {
            return [
                ...tasks,
                {
                    title: title,
                    completed: false
                }
            ]
        })
    }
}
