import { Component, Input, OnInit } from '@angular/core';
import { TextQuestion, TextQuestionType } from "../questions/text-questions";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextQuestionComponent
    }
  ]
})
export class TextQuestionComponent implements OnInit, ControlValueAccessor {

  @Input() question!: TextQuestion;

  get placeholder() {
    if (this.question.placeholder)
      return this.question.placeholder;
    return "Enter your answer here";
  }

  get maxLength() {
    if (this.question.maxLength)
      return this.question.maxLength;
    return defaultMaxLength(this.question.type);
  }

  value!: string;

  onChange = (value: string) => {};
  onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
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

  onValueChange() {
    this.onTouched();
    this.onChange(this.value);
  }
}

function defaultMaxLength(type: TextQuestionType): number {
  switch (type) {
    case TextQuestionType.SHORT:
      return 30;
    case TextQuestionType.LONG:
      return 256;
  }
}
