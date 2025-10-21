import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScriptLoaderService } from './services/script-loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('love');

  constructor(private readonly scriptLoader: ScriptLoaderService) {}

  ngAfterViewInit() {
    this.scriptLoader.loadAll([
 
      { src: 'assets/js/main.js' , attr: { defer: 'true' } }
    ]);
  }
}
