# javascript-lotto-precourse

## 구현 기능 목록

- [x] **로또 구입 금액 입력**
  - 사용자가 구매할 로또 금액을 입력을 할 수 있게 한다.
  - 입력값이 1,000원 단위로 한다.

- [] **입력한 금액으로 로또 구매**
  - 입력한 값에 로또 구매를 한다
  - 로또 번호는 1 ~ 45 범위 내의 고유한 숫자가 출력될 수 있겠금 한다.
  - 구매한 로또 갯수 만큼 로또들을 출력한다

- [] **당첨 번호 입력**
  - 1 ~ 45 범위 내의 고유한 숫자만 6번 입력이 가능도록 한다.
  - 숫자들은 쉼표 (,)로 작성을 해야한다.

- [] **보너스 번호 입력**
  - 당첨 번호 입력와 같이 1 ~ 45 범위 내의 고유한 숫자만 입력이 가능하도록 한다.

- [] **구매한 로또와 로또 번호 매칭**
  - 당첨 번호와 구매한 로또 번호의 일치 개수에 따라 당첨 결과를 출력해준다.
  - 일치 개수 매칭이 완료된 후, 추가적으로 보너스 번호와 일치하는지 확인해준다.
  - 최종적으로 매칭된 개수를 세준다.

- [] **최종 결과 및 수익률 출력**
  - 매칭된 결과에 따라 결과를 출력을 해준다 (3개부터).
  ```bash
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  ```
  - 매칭된 개수에 따라 상금을 계산한다.
  - 로또 구입 금액 대비 수익률을 계산하여 출력하도록 한다. (수익률은 소수점 둘째 자리에서 반올림해 출력해준다)
  ```bash
  총 수익률은 62.5%입니다.
  ```

예시
```bash
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43] 
[3, 5, 11, 16, 32, 38] 
[7, 11, 16, 35, 36, 44] 
[1, 8, 11, 31, 41, 42] 
[13, 14, 16, 38, 42, 45] 
[7, 11, 30, 40, 42, 43] 
[2, 13, 22, 32, 38, 45] 
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```