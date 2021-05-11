import { IFeedbackItem, IFeedback } from './types';

export function addAnswerToFeedback(feedbackItem: IFeedbackItem) {
  return {
    type: 'ADD_FEEDBACK',
    payload: { feedbackItem },
  };
}
export function resetFeedback() {
  return {
    type: 'RESET_FEEDBACK',
    payload: {},
  };
}
