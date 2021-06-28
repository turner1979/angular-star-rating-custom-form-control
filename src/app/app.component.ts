import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form = new FormGroup({
    reviewTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(32)
    ]),
    starRating: new FormControl('', [
      Validators.required
    ]),
  });

}
