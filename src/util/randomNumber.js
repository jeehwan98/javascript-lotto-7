import { MissionUtils } from "@woowacourse/mission-utils";

function pickRandomNumberInRange(start, end, number) {
  return MissionUtils.Random.pickNumberInRange(start, end, number);
}

export default pickRandomNumberInRange;