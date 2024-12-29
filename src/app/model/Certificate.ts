export class Certificate {
    public id: number;
    public title: string;
    public institute: string;
    public description: string;
    public image: string;
    public category: string;

    constructor( id: number, title: string, institute: string, description: string, image: string, category: string) {
        this.id = id;
        this.title = title;
        this.institute = institute;
        this.description = description;
        this.image = image;
        this.category = category;
    }
}