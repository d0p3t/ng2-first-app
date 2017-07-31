import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  message: string = 'Hello!';
  users: User[] = [
    { id: 25, name: 'Remco D0p3t', username: 'd0p3t' },
    { id: 26, name: 'Daniel Trovsky', username: 'daniel123' },
    { id: 27, name: 'Franz Twitch', username: 'franztwitch' }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }
}
