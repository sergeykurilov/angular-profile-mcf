import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  ngOnInit(): void {}


  /**
   * Initialize the form
   */

  /**
   * Handle the add user when the 'Create User' button is clicked
   * @param name: user's name
   * @param email: user's email
   */
  addUser(name: string, email: string): void {
    console.log(name, email)
  }

  /**
   * Get the users for unit testing purposes
   */
  getUsers() {
    return {
      name: "name",
      email: 'email'
    }
  }
}
