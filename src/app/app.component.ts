import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  form: FormGroup;
  disableStarRatingCtrl: FormControl;
  disableStarRatingSub$: Subscription;
  reviewTitleCtrl: FormControl;
  starRatingCtrl: FormControl;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();
    this.addFormControlRefs();
    this.addDisableStarRatingSubscriber();
  }

  ngOnDestroy(): void {
    this.disableStarRatingSub$.unsubscribe();
  }

  buildForm(): void {
    this.form = this.fb.group({
      reviewTitle: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32)
      ]],
      starRating: [0, [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]],
      disableStarRating: [false]
    })
  }

  addFormControlRefs(): void {
    this.reviewTitleCtrl = this.form.controls['reviewTitle'] as FormControl;
    this.starRatingCtrl = this.form.controls['starRating'] as FormControl;
    this.disableStarRatingCtrl = this.form.controls['disableStarRating'] as FormControl;
  }

  addDisableStarRatingSubscriber(): void {
    this.disableStarRatingSub$ = this.disableStarRatingCtrl.valueChanges.subscribe(disableStarRating =>
      disableStarRating ? this.starRatingCtrl.disable() : this.starRatingCtrl.enable()
    );
  }

  onReset(): void {
    this.form.reset({
      reviewTitle: '',
      starRating: 0,
      disableStarRating: false
    });
  }

}
