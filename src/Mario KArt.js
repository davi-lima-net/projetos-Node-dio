async function getPowerUp() {
  const powerUps = ["MARTELÃO", "CASCO", "BANANA"];
  const randomIndex = Math.floor(Math.random() * powerUps.length);
  return powerUps[randomIndex];
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
      await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
      await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
    }

    if (block === "CONFRONTO") {
      let powerUp1 = await getPowerUp();
      let powerUp2 = await getPowerUp();

      let bonus1 = 0;
      let bonus2 = 0;

      switch (powerUp1) {
        case "MARTELÃO": bonus1 = 2; break;
        case "CASCO": bonus1 = 1; break;
        case "BANANA": bonus1 = 0; break;
      }

      switch (powerUp2) {
        case "MARTELÃO": bonus2 = 2; break;
        case "CASCO": bonus2 = 1; break;
        case "BANANA": bonus2 = 0; break;
      }

      console.log(`${character1.NOME} usou o power-up: ${powerUp1} (+${bonus1} PODER)`);
      console.log(`${character2.NOME} usou o power-up: ${powerUp2} (+${bonus2} PODER)`);

      let powerResult1 = diceResult1 + character1.PODER + bonus1;
      let powerResult2 = diceResult2 + character2.PODER + bonus2;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER + bonus1);
      await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER + bonus2);

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
        character1.PONTOS--;
      }

      if (powerResult1 === powerResult2) {
        console.log("Confronto empatado! Nenhum ponto foi perdido");
      }
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }

    console.log("-----------------------------");
  }
}
