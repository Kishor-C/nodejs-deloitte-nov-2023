import { Component } from '@angular/core';
import {AMOUNT, DOB, FRUITS, PROFILES, IMAGE_URL, MESSAGE} from '../mocks';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  // we need to have property inside the component to display them
  message = MESSAGE; 
  amount = AMOUNT;
  imageUrl = IMAGE_URL;
  fruits = FRUITS;
  profiles = PROFILES;
  dob = DOB;
}
