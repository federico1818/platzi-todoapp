import { CommonModule } from '@angular/common'
import { Component, WritableSignal, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Task } from './models/task'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule, 
        RouterOutlet,
        ReactiveFormsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    public form: FormGroup = this.fb.group({
        task: ['', Validators.required]
    })
    
    constructor(
        private fb: FormBuilder
    ) {}

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

    public onSubmit() {
        if(this.form.valid) {
            this.addTask(this.form.value.task)
            this.form.reset()
        }
    }

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

    public toggleCompleted(i: number): void {
        this.tasks.update((tasks: Task[]) => {
            return tasks.map((task: Task, index: number) => {
                return i !== index? task: {
                    ...task,
                    completed: !task.completed
                }
            })
        })
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
