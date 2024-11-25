import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h2>{{ title }}</h2>
    </header>
  `
})
class HeaderComponent {
  title = 'Welcome to Angular';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <p>{{ message }}</p>
        <button (click)="updateMessage()">Click me!</button>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
  `]
})
class App {
  message = 'This is a simple Angular app!';

  updateMessage() {
    this.message = 'Button clicked! Message updated.';
  }
}

bootstrapApplication(App);