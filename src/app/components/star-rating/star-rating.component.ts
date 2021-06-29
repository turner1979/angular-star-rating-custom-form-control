import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: StarRatingComponent
    }
  ]
})
export class StarRatingComponent implements ControlValueAccessor {
  @Input() maxRatings = 5;
  rating = 0;

  onChange = (rating) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  ratings(maxRatings: number) {
    return new Array(maxRatings);
  }

  onChangeRating(rating: number) {
    this.markAsTouched();
    if (!this.disabled) {
      this.rating = rating;
      this.onChange(this.rating);
    }
  }

  writeValue(rating: number) {
    this.rating = rating;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
