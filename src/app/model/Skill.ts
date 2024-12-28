export class Skill {
    public id: number;
    public name: string;
    public percentage: number;

    constructor(id: number, name: string, percentage: number) {
        this.id = id;
        this.name = name;
        this.percentage = percentage;
    }
}
