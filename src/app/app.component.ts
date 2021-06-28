import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  reviewTitleCtrl: FormControl;
  starRatingCtrl: FormControl;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();
    this.addFormControlRefs();

  }

  buildForm(): void {
    this.form = this.fb.group({
      reviewTitle: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32)
      ]],
      starRating: ['', [
        Validators.required,
      ]]
    })
  }

  addFormControlRefs(): void {
    this.reviewTitleCtrl = this.form.controls['reviewTitle'] as FormControl;
    this.starRatingCtrl = this.form.controls['starRating'] as FormControl;
  }

}
