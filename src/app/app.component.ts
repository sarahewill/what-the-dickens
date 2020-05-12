import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'what-the-dickens';
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/characters', icon: 'person', title: 'Characters' },
    { path: '/pubs', icon: 'local_drink', title: 'Pubs' },
  ];
}
