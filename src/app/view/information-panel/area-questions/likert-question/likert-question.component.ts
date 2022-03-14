import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";
import { LikertQuestion } from "../questions/likert-questions";

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

  @Input() likertQuestion: LikertQuestion = {
    id: "",
    required: false,
    question: "",
    minValue: 1,
    minLabel: "Totally disagree",
    maxValue: 5,
    maxLabel: "Completely agree"
  };
  @Input() validState: boolean = false;

  options: number[] = [];
  value!: number;

  onChange = (value: number) => {};
  onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
    this.options = Array.from(
      {length: this.likertQuestion.maxValue - this.likertQuestion.minValue + 1},
      (_, i) => i + this.likertQuestion.minValue);
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
