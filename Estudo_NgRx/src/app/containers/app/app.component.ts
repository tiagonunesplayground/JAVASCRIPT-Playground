import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <div class="app__header">
      <img src="/assets/img/pencil.svg" class="app__logo">
    </div>
    <div class="app__content">
      <div class="app__nav">
        <a routerLink="todo" routerLinkActive="active">Todo</a>
      </div>
      <div class="app__container">
        <router-outlet></router-outlet>
      </div>
      <div class="app__footer">
        <p>&copy; Todo Inc.</p>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {}
