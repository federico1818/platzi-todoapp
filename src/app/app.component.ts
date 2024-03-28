import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    public tasks: WritableSignal<string[]> = signal([
        'Install Angular Cli',
        'Create project',
        'Create component'
    ])
}
