import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  readonly _energyType = 'mana';
  private static _instances = 0;
  constructor(name:string) {
    super(name);
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._instances;
  }
}