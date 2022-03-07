export const likertQuestions: LikertQuestion[] = [
  {
    id: "q1",
    question: "Test question 1",
    minValue: 0,
    minLabel: "Totally disagree",
    maxValue: 5,
    maxLabel: "Completely agree"
  },
  {
    id: "q2",
    question: "Test question 2",
    minValue: 1,
    minLabel: "Not sure",
    maxValue: 3,
    maxLabel: "Completely sure"
  },
  {
    id: "q3",
    question: "Test question 3",
    minValue: 0,
    minLabel: "Totally disagree",
    maxValue: 4,
    maxLabel: "Completely agree"
  },
  {
    id: "q4",
    question: "Test question 4",
    minValue: 0,
    minLabel: "Totally disagree",
    maxValue: 5,
    maxLabel: "Completely agree"
  },
]

export interface LikertQuestion {
  id: string,
  question: string,
  minValue: number,
  minLabel: string,
  maxValue: number,
  maxLabel: string
}
