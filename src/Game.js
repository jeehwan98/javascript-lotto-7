import { Console } from "@woowacourse/mission-utils";
import { QUERY } from "./constant";

class Game {
  userInput() {
    Console.readLineAsync(QUERY.INPUT_PURCHASE_AMOUNT, (input) => {
      console.log('input?:', input);
      // const amount = Number(input);
      // console.log('amount?:', amount);
    });
  }
}

export default Game;