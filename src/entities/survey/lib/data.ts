import { SurveyItem } from '../model/types';

export const survey:SurveyItem[] = [
  {
    question: "1. 현재 귀하의 연령대는 어떻게 되시나요?",
    options: ["10대", "20대", "30대", "40대", "50대 이상"]
  },
  {
    question: "2. 본 서비스를 알게 된 경로는 무엇인가요?",
    options: ["검색엔진", "지인추천", "SNS", "광고", "기타"],
    multi: 3
  },
  {
    question: "3. 본 서비스를 얼마나 자주 이용하시나요?",
    options: ["매일", "주 2~3회", "주 1회", "월 1회 이하", "처음 이용함"],
    multi: 2
  },
  {
    question: "4. 서비스의 전반적인 만족도는 어느 정도인가요?",
    options: ["매우 만족", "만족", "보통", "불만족", "매우 불만족"]
  },
  {
    question: "5. 향후 본 서비스를 다시 이용할 의향이 있으신가요?",
    options: ["매우 그렇다", "그렇다", "보통이다", "그렇지 않다", "전혀 그렇지 않다"]
  }
];