import { Component } from '@angular/core';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {

  constructor(private _service : ApiCallerService) { } // ensure constructor closes here

  // *ngFor can be used in html to iterate
  fakeUsers : any = []; // it must be updated later

  handleClick() {
    // Observable sends request to the APIs only when you call subscribe( object )
    // object is having next, error properties with a callback that is executed on success/failure
    this._service.fetchFakeApi()
      .subscribe({
        next : result => this.fakeUsers = result, 
        error : err => console.log(err)
      });
  }

  // call this function from the html by passing the form data as an object
  handleForm(profile : any) {
    this._service.storeInRealApi(profile)
    .subscribe({
      next : result => alert(JSON.stringify(result)),
      error : err => alert(JSON.stringify(err))
    });
  }

}
