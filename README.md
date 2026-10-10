# 🐝 Apis Intel Core Framework (@apis-intel/framework)

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8%2B-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Zero Data Retention](https://img.shields.io/badge/Security-Zero%20Data%20Retention%20(ZDR)-emerald.svg)](#)
[![LEO Investigative Mode](https://img.shields.io/badge/Mode-LEO%20Investigative-red.svg)](#)

Le framework unifié et modulaire d'investigation multi-IA, de scellement de preuves juridiques et de coordination d'urgence pour avocats, enquêteurs judiciaires (LEO), assureurs et ONG.

## Installation
```bash
npm install @apis-intel/framework
# ou
pnpm add @apis-intel/framework
```

## Démarrage Rapide
```typescript
import { ApisIntel } from '@apis-intel/framework';

const client = new ApisIntel({ enforceZdr: true });

// 1. Routage Multi-IA intelligent
const route = client.router.routeTask("Recherche de nullités et contradictions pénales");
console.log(route.model); // -> claude-3-5-sonnet

// 2. Scellement de preuve
const block = client.custody.sealEvidence(evidenceItem, "Officier PJ #7501");
console.log(block.signature);
```
