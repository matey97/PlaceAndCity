import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { likertQuestions } from "./questions/likert-questions";
import { nameQuestion, freeQuestions } from "./questions/text-questions";
import { AreaAnswers } from "./answers";
import { Question } from "./questions";

@Component({
  selector: 'app-area-questions',
  templateUrl: './area-questions.component.html',
  styleUrls: ['./area-questions.component.scss']
})
export class AreaQuestionsComponent implements OnInit {

  @Output() answers = new EventEmitter<AreaAnswers>()

  nameForm!: FormGroup;
  freeQuestionsForm!: FormGroup;
  likertQuestionsForm!: FormGroup;

  nameQuestion = nameQuestion;
  freeQuestions = freeQuestions;
  likertQuestions = likertQuestions;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.nameForm = this.formBuilder.group(this.formConfigBuilder([this.nameQuestion]));

    this.freeQuestionsForm = this.formBuilder.group(this.formConfigBuilder(this.freeQuestions));

    this.likertQuestionsForm = this.formBuilder.group(this.formConfigBuilder(this.likertQuestions));
  }

  onQuestionsAnswered() {
    this.answers.emit({
      name: this.nameForm.value["name"],
      freeTextQuestions: this.freeQuestionsForm.value,
      likertQuestions: this.likertQuestionsForm.value
    });
  }

  onNextInQuestions() {
    this.likertQuestions.forEach((likertQuestion) => {
      this.likertQuestionsForm.controls[likertQuestion.id].markAsTouched();
    });
  }

  inValidState(questionId: string): boolean {
    const control = this.likertQuestionsForm.controls[questionId];
    return control.valid || control.untouched;
  }

  private formConfigBuilder(questions: Question[]): {[p: string]: any} {
    const questionsConfig: {[p: string]: any} = {};
    questions.forEach((question) => {
      const config: any = [""]
      if (question.required) config.push(Validators.required);

      questionsConfig[question.id] = config;
    });

    return questionsConfig;
  }

}
