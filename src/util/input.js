import { Console } from "@woowacourse/mission-utils";

function readUserInput(message) {
  return Console.readLineAsync('구입금액을 입력해 주세요.\n');
};

export {
  readUserInput
};