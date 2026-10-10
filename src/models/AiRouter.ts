export class AiRouter {
  public routeTask(task: string, contextLength = 0, mediaType: 'text'|'image'|'video' = 'text') {
    const lower = task.toLowerCase();

    // 1. Vidéo ou volumétrie massive -> Gemini 1.5/2.0 Pro
    if (mediaType === 'video' || contextLength > 150000 || lower.includes('vidéo') || lower.includes('cctv')) {
      return {
        provider: 'google',
        model: 'gemini-1.5-pro',
        specialty: 'massive_volumetry',
        reasoning: 'Routé vers Gemini 1.5 Pro : Contexte volumineux ou flux de vidéosurveillance 2M tokens.'
      };
    }

    // 2. Extraction structurée, OCR ou scènes -> GPT-4o
    if (lower.includes('ocr') || lower.includes('extraction') || lower.includes('pièce d\'identité') || mediaType === 'image') {
      return {
        provider: 'openai',
        model: 'gpt-4o',
        specialty: 'structured_extraction',
        reasoning: 'Routé vers GPT-4o : Extraction d\'entités complexes et parsing haute fidélité.'
      };
    }

    // 3. Finesse juridique, contradictions, pénal -> Claude 3.5 Sonnet
    if (lower.includes('droit') || lower.includes('pénal') || lower.includes('avocat') || lower.includes('contradiction')) {
      return {
        provider: 'anthropic',
        model: 'claude-3-5-sonnet-latest',
        specialty: 'legal_refinement',
        reasoning: 'Routé vers Claude 3.5 Sonnet : Supériorité avérée pour l\'analyse de contradictions pénales.'
      };
    }

    // Défaut réactif -> Gemini Flash
    return {
      provider: 'google',
      model: 'gemini-1.5-flash',
      specialty: 'fast_triage',
      reasoning: 'Routé vers Gemini 1.5 Flash : Triage rapide ultra-réactif sous la seconde.'
    };
  }
}