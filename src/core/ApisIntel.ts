import { ZdrManager } from './ZdrManager';
import { AiRouter } from '../models/AiRouter';
import { TimelineEngine } from '../investigation/TimelineEngine';
import { ContradictionDetector } from '../investigation/ContradictionDetector';
import { CustodyChain } from '../investigation/CustodyChain';
import { StealthEngine } from '../leo/StealthEngine';
import { HumanitarianNetwork } from '../solidarite/HumanitarianNetwork';

export class ApisIntel {
  public readonly zdr = new ZdrManager();
  public readonly router = new AiRouter();
  public readonly timeline = new TimelineEngine();
  public readonly contradictions = new ContradictionDetector();
  public readonly custody = new CustodyChain();
  public readonly stealth = new StealthEngine();
  public readonly humanitarian = new HumanitarianNetwork();

  public static get version(): string {
    return '1.0.0-rc.1';
  }
}