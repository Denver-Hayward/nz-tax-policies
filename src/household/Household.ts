import { Person } from "./Person";

export class Household {
    public people: Person[];

    constructor(data: Partial<Household> = {}) {
        Object.assign(this, data);
    }

    public get income(): number {
        let total = 0;
        this.people.forEach((person) => total += person.income);
        return total;
    }
}