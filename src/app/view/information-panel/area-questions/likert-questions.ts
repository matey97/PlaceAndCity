export const likertQuestions: LikertQuestion[] = [
  {
    id: "q1",
    required: true,
    question: "Test question 1",
    minValue: 0,
    minLabel: "Totally disagree",
    maxValue: 5,
    maxLabel: "Completely agree"
  },
  {
    id: "q2",
    required: false,
    question: "Test question 2",
    minValue: 1,
    minLabel: "Not sure",
    maxValue: 3,
    maxLabel: "Completely sure"
  },
  {
    id: "q3",
    required: true,
    question: "Test question 3",
    minValue: 0,
    minLabel: "Totally disagree",
    maxValue: 4,
    maxLabel: "Completely agree"
  },
  {
    id: "q4",
    required: true,
    question: "Test question 4",
    minValue: 0,
    minLabel: "Totally disagree",
    maxValue: 5,
    maxLabel: "Completely agree"
  },
]

export interface LikertQuestion {
  id: string,
  required: boolean
  question: string,
  minValue: number,
  minLabel: string,
  maxValue: number,
  maxLabel: string
}
