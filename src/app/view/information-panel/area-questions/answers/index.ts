export interface AreaAnswers {
  name: string,
  freeTextQuestions: { [key: string]: string },
  likertQuestions: { [key: string]: string },
  selectedClusters: { [key: string]: boolean },
}
