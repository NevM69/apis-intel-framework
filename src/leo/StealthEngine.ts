export class StealthEngine {
  public compileLeoQuery(rawInput: string) {
    const clean = rawInput.trim();
    const dorks = [
      `"${clean}" (PV OR audition OR "mise en examen" OR condamnation)`,
      `"${clean}" (societe.com OR pappers.fr OR infogreffe.fr)`,
      `site:github.com OR site:pastebin.com intext:"${clean}"`,
      `site:linkedin.com/in "${clean}"`
    ];
    return {
      query: clean,
      dorks,
      stealthFingerprintMasked: true,
      auditId: `leo_audit_${Date.now()}`
    };
  }
}