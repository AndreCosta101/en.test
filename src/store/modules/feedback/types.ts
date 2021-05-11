export interface IFeedbackItem {
  qualityId: number;
  value: number;
}

export interface IFeedback {
  feedback: IFeedbackItem[];
}