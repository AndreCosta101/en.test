/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import { HYDRATE } from "next-redux-wrapper";
import produce from 'immer';
import { IFeedback } from './types';

const INITIAL_STATE: IFeedback = {
  feedback: [
    {
      qualityId: 0,
      value: 0
    },
    {
      qualityId: 1,
      value: 0,
    },
    {
      qualityId: 2,
      value: 0,
    },
    {
      qualityId: 3,
      value: 0,
    },
    {
      qualityId: 4,
      value: 0,
    },
    {
      qualityId: 5,
      value: 0,
    },
    {
      qualityId: 6,
      value: 0,
    },
    {
      qualityId: 7,
      value: 0,
    },
    {
      qualityId: 8,
      value: 0,
    },
    {
      qualityId: 9,
      value: 0,
    },
    {
      qualityId: 10,
      value: 0,
    },
    {
      qualityId: 11,
      value: 0,
    },
    {
      qualityId: 12,
      value: 0,
    },
    {
      qualityId: 13,
      value: 0,
    },
    {
      qualityId: 14,
      value: 0,
    },
    {
      qualityId: 15,
      value: 0,
    },
    {
      qualityId: 16,
      value: 0,
    },
  ],
};


const Feedback: Reducer<IFeedback> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case HYDRATE:
        return action.payload.feedbackItem;

      case 'ADD_FEEDBACK':
        const { feedbackItem } = action.payload;

        draft.feedback[feedbackItem.qualityId].value = feedbackItem.value;
        break;

      case 'RESET_FEEDBACK':
        draft.feedback.map(feedbackItem => feedbackItem.value = 0);
        break;

      default:
        return state;
    }
  })
}


export default Feedback;
