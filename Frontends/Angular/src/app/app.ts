import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/bar-chart';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ChartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  //protected readonly title = signal('Hector');
  //name = "Hector2"
  ok = true;
  items = ['A','B','C'];
}