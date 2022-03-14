import { Question } from "./index";

export interface TextQuestion extends Question {
  type: TextQuestionType,
  question: string,
  placeholder?: string,
  maxLength?: number,
}

export enum TextQuestionType {
  SHORT = "short", LONG = "long"
}

export const nameQuestion: TextQuestion = {
  id: "name",
  type: TextQuestionType.SHORT,
  required: true,
  question: "Area's name"
}

export const freeQuestions: TextQuestion[] = [
  {
    id: "fq1",
    type: TextQuestionType.LONG,
    required: true,
    question: "Question 1",
    maxLength: 100
  },
  {
    id: "fq2",
    type: TextQuestionType.SHORT,
    required: false,
    question: "Question 2"
  },
  {
    id: "fq3",
    type: TextQuestionType.LONG,
    required: true,
    question: "This is a long question. This is a long question. This is a long question. This is a long question.",
    placeholder: "This is a placeholder"
  }
]


