import { ApisIntel } from '@apis-intel/framework';

const client = new ApisIntel();

// Test routage pénal
const decision = client.router.routeTask("Audition de garde à vue et nullité de procédure");
console.log("Routage:", decision.model);

// Scellement d'une pièce à conviction
const sealed = client.custody.sealEvidence({
  id: "EVID_409",
  rawHash: "sha256_e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}, "Commandant PJ 75");

console.log("Bloc scellé:", sealed.blockIndex, sealed.signature);
