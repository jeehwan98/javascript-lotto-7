import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputtedAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    console.log('inputtedString', inputtedAmount);
  }
}

export default App;
