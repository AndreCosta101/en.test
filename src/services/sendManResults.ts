import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import api from '../api'
import { IFeedback } from '../store/modules/feedback/types';

const sendManResults = async (feedbackAnswers) => {
  await api.post('man-feedback-results', feedbackAnswers)
}


export default sendManResults;