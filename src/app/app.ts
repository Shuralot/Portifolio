import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from './main-header/main-header';
import { MainFooter } from './main-footer/main-footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeader, MainFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('santos-app');
}
