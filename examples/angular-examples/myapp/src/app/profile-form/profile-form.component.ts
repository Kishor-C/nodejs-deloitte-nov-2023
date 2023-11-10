import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {

  // call this function from the html by passing the form data as an object
  handleForm(profile : any) {
    console.log(profile);
  }
}
