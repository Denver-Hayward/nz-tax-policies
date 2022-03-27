import { Household } from "../household/Household";

export abstract class FTC {
    abstract data: {[key: number]: number[]}
    abstract childrenCount(household: Household): number;

    // TODO - works but isn't very nice. Sorting is weird, and the iterating is weird too
    calculate(household: Household): number {
        const children = this.childrenCount(household);
        let lastValue = [0, 0, 0, 0, 0, 0];
        for (let key of Object.keys(this.data).map(Number).sort((a, b) => a < b? -1 : a = b? 0 : 1)) {
            console.log(key)
            if (household.income <= key) {
                return lastValue[children];
            }
            lastValue = this.data[key];
        }
        return 0;
    }
}