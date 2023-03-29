import Race from './Race';

export default class Halfling extends Race {
  readonly _maxLifePoints = 60;
  private static _instances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instances;
  }
}