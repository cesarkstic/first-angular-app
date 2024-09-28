import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS [randomIdx]

  get imagePath():string{
    return 'assets/users/' + this.selectedUser.avatar
  }

  get userName():string {
    return this.selectedUser.name
  }

  onSelectUser(){
    console.log('yooo')
  }
}
