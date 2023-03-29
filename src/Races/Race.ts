export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  abstract get maxLifePoints(): number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }
}