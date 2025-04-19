document.getElementById("qcm-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Réponses correctes
    const bonnesReponses = {
      q1: "a",
      q2: "c",
      q3: "b",
      q4: "b",
      q5: "a",
      q6: "b",
      q7: "c",
      q8: "a",
      q9: "b",
      q10: "a"
    };
  
    let score = 0;
    let total = Object.keys(bonnesReponses).length;
  
    for (let question in bonnesReponses) {
      const radios = document.getElementsByName(question);
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked && radios[i].value === bonnesReponses[question]) {
          score++;
        }
      }
    }
  
    const resultat = document.getElementById("resultat");
    let pourcentage = (score / total) * 100;
    let classe = "result-rouge";
  
    if (pourcentage === 100) {
      classe = "result-vert";
    } else if (pourcentage >= 50) {
      classe = "result-orange";
    }
  
    resultat.className = classe;
    resultat.textContent = `Votre score est : ${score}/${total} (${pourcentage.toFixed(0)}%)`;
  });
  