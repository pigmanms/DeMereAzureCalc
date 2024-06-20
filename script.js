function solveDeMereProblem() {
    const tryDiceTimes = parseInt(document.getElementById('tryDiceTimes').value);
  
    const singleDiceResult = simulateSingleDice(tryDiceTimes);
    const doubleDiceResult = simulateDoubleDice(tryDiceTimes);
  
    document.getElementById('singleDiceResult').textContent = 
      `주사위 한개를 4번 던져서 적어도 한번 6이 나올 확률: ${singleDiceResult.probability.toFixed(5)}`;
    document.getElementById('doubleDiceResult').textContent = 
      `주사위 두개를 24번 던져서 적어도 한번 (6, 6)이 나올 확률: ${doubleDiceResult.probability.toFixed(5)}`;
  
    displayTrialResults(singleDiceResult.details, doubleDiceResult.details);
  }
  
  function simulateSingleDice(tryDiceTimes) {
    let successCount = 0;
    const details = [];
  
    for (let i = 0; i < tryDiceTimes; i++) {
      let success = false;
      const diceResults = [];
  
      for (let j = 0; j < 4; j++) {
        const dice = Math.floor(Math.random() * 6) + 1;
        diceResults.push(dice);
        if (dice === 6) {
          success = true;
          break;
        }
      }
  
      details.push({ trial: i + 1, diceResult: diceResults.join(' '), type: 'singleDice', success });
      if (success) {
        successCount++;
      }
    }
  
    return { probability: successCount / tryDiceTimes, details };
  }
  
  function simulateDoubleDice(tryDiceTimes) {
    let successCount = 0;
    const details = [];
  
    for (let i = 0; i < tryDiceTimes; i++) {
      let success = false;
      const diceResults = [];
  
      for (let j = 0; j < 24; j++) {
        const diceA = Math.floor(Math.random() * 6) + 1;
        const diceB = Math.floor(Math.random() * 6) + 1;
        diceResults.push(`(${diceA}, ${diceB})`);
        if (diceA === 6 && diceB === 6) {
          success = true;
          break;
        }
      }
  
      details.push({ trial: i + 1, diceResult: diceResults.join(' '), type: 'doubleDice', success });
      if (success) {
        successCount++;
      }
    }
  
    return { probability: successCount / tryDiceTimes, details };
  }
  
  function displayTrialResults(singleDiceDetails, doubleDiceDetails) {
    const trialResults = document.getElementById('trialResults');
    trialResults.innerHTML = '';
  
    const combinedDetails = [...singleDiceDetails, ...doubleDiceDetails];
  
    combinedDetails.forEach(trial => {
      const trialElement = document.createElement('div');
      trialElement.classList.add('trial');
  
      const trialText = `
        <p>시도횟수: ${trial.trial}회</p>
        <p>주사위 결과: ${trial.diceResult}</p>
        <p>시도종류: ${trial.type}</p>
        <p>성공여부: ${trial.success}</p>
      `;
  
      trialElement.innerHTML = trialText;
      trialResults.appendChild(trialElement);
    });
  }
  