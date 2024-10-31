const QUERY = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

const LOTTO = Object.freeze({
  PRIZE: 1000,
  COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
});

const PRIZE = Object.freeze({
  FIFTH_PLACE: 5000,
  FOURTH_PLACE: 50000,
  THIRD_PLACE: 1500000,
  SECOND_PLACE: 30000000,
  FIRST_PLACE: 2000000000,
});

const ERROR = Object.freeze({
  INVALID_AMOUNT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  EMPTY_QUERY: '[ERROR] 값을 입력해야 합니다.',
})

export {
  QUERY,
  LOTTO,
  PRIZE,
  ERROR
};
