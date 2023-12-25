export class Skill {
    public id: number;
    public name: string;
    public percentage: string;

    constructor(id: number, name: string, percentage: string) {
        this.id = id;
        this.name = name;
        this.percentage = percentage;
    }
}