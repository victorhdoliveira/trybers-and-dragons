import Race from './Race';

export default class Dwarf extends Race {
  readonly _maxLifePoints = 80;
  private static _instances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instances;
  }
}