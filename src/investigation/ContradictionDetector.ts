export class ContradictionDetector {
  public analyzePair(input: { pvA: { title: string; text: string }; pvB: { title: string; text: string } }) {
    const findings = [];
    const textA = input.pvA.text.toLowerCase();
    const textB = input.pvB.text.toLowerCase();

    const timeA = input.pvA.text.match(/(\d{1,2}h\d{0,2})/i);
    const timeB = input.pvB.text.match(/(\d{1,2}h\d{0,2})/i);

    if (timeA && timeB && timeA[1] !== timeB[1]) {
      findings.push({
        severity: 'CRITICAL',
        nature: 'TEMPORAL',
        description: `Divergence d'horodatage : ${timeA[1]} vs ${timeB[1]}.`,
        legalImpact: 'Fragilise la crédibilité sur la fenêtre de flagrance (art. 61-1 CPP).',
        suggestedQuestions: [
          'À quelle horloge précise avez-vous vérifié l\'heure mentionnée ?',
          'Avez-vous consulté votre téléphone portable à ce moment précis ?'
        ]
      });
    }

    return findings;
  }
}