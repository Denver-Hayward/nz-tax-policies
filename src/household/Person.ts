

export class Person {
    public age: number = 0;
    public income: number = 0;

    constructor(data: Partial<Person>) {
        Object.assign(this, data);
    }
}