import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";

@Component({
  selector: 'app-likert-question',
  templateUrl: './likert-question.component.html',
  styleUrls: ['./likert-question.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: LikertQuestionComponent
    }
  ]
})
export class LikertQuestionComponent implements OnInit, ControlValueAccessor {

  @Input() question: string = "";
  @Input() required: boolean = true;
  @Input() min: number = 1;
  @Input() minLabel: string = "Totally disagree";
  @Input() max: number = 5;
  @Input() maxLabel: string = "Completely agree";
  @Input() validState: boolean = false;

  options: number[] = [];
  value!: number;

  onChange = (value: number) => {};
  onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
    this.options = Array.from({length: this.max - this.min + 1}, (_, i) => i + this.min);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  onSelectionChanged(event: MatRadioChange) {
    this.onChange(event.value);
  }
}
