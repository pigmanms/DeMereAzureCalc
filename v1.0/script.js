function solveDeMereProblem() {
  const tryDiceTimes = parseInt(document.getElementById('tryDiceTimes').value);

  const singleDiceProbability = simulateSingleDice(tryDiceTimes);
  const doubleDiceProbability = simulateDoubleDice(tryDiceTimes);

  document.getElementById('singleDiceResult').textContent = 
    `주사위 한개를 4번 던져서 적어도 한번 6이 나올 확률: ${singleDiceProbability.toFixed(5)}`;
  document.getElementById('doubleDiceResult').textContent = 
    `주사위 두개를 24번 던져서 적어도 한번 (6, 6)이 나올 확률: ${doubleDiceProbability.toFixed(5)}`;
}

function simulateSingleDice(tryDiceTimes) {
  let successCount = 0;

  for (let i = 0; i < tryDiceTimes; i++) {
    let success = false;

    for (let j = 0; j < 4; j++) {
      if (Math.floor(Math.random() * 6) + 1 === 6) {
        success = true;
        break;
      }
    }

    if (success) {
      successCount++;
    }
  }

  return successCount / tryDiceTimes;
}

function simulateDoubleDice(tryDiceTimes) {
  let successCount = 0;

  for (let i = 0; i < tryDiceTimes; i++) {
    let success = false;

    for (let j = 0; j < 24; j++) {
      const diceA = Math.floor(Math.random() * 6) + 1;
      const diceB = Math.floor(Math.random() * 6) + 1;

      if (diceA === 6 && diceB === 6) {
        success = true;
        break;
      }
    }

    if (success) {
      successCount++;
    }
  }

  return successCount / tryDiceTimes;
}
