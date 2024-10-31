import { QUERY } from "./util/constant.js";
import { readUserInput } from "./util/input.js";

class App {
  async run() {
    const inputtedAmount = await readUserInput(QUERY.INPUT_PURCHASE_AMOUNT);
    console.log('inputtedString', inputtedAmount);
  }
}
export default App;