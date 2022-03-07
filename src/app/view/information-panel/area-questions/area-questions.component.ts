import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { likertQuestions } from "./likert-questions";

@Component({
  selector: 'app-area-questions',
  templateUrl: './area-questions.component.html',
  styleUrls: ['./area-questions.component.scss']
})
export class AreaQuestionsComponent implements OnInit {

  @Output() answers = new EventEmitter<AreaAnswers>()

  nameForm!: FormGroup;
  freeText!: FormGroup;
  questions!: FormGroup;

  likertQuestions = likertQuestions;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.nameForm = this.formBuilder.group({
      name: ["", Validators.required]
    });

    this.freeText = this.formBuilder.group({
      text: ["", Validators.required]
    });

    const questionsConfig: {[p: string]: any} = {};
    this.likertQuestions.forEach((question) => {
      questionsConfig[question.id] = ["", Validators.required]
    });
    this.questions = this.formBuilder.group(questionsConfig);
  }

  onQuestionsAnswered() {
    this.answers.emit({
      name: this.nameForm.value["name"],
      freeText: this.freeText.value["text"],
      questions: this.questions.value
    });
  }
}

export interface AreaAnswers {
  name: string,
  freeText: string,
  questions: [{string: number}]
}
