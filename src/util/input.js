import { Console } from "@woowacourse/mission-utils";

function readUserInput(message) {
  return Console.readLineAsync(message);
};

export {
  readUserInput
};