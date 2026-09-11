window.DrillModule = {
  // 1回分のドリル問題を生成して返す関数
  generateProblem() {
    const isAddition = Math.random() < 0.5;
    let a, b, operator, answer;

    if (isAddition) {
      // 足し算 (1〜12)
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * 12) + 1;
      operator = "+";
      answer = a + b;
    } else {
      // 引き算 (答えが正の整数になるように a >= b を満たす)
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * a) + 1; // b は 1 から a まで
      operator = "-";
      answer = a - b;
    }

    return {
      questionText: `${a} ${operator} ${b}`,
      answer: answer,
    };
  },
};
