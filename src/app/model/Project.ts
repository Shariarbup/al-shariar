export class Project {
    public id: number;
    public title: string;
    public description: string;
    public technologyUsed: string;
    public image: string;
    public category: string;
    public viewUrl: string;
    public githubUrl: string;

    constructor(id: number, title: string, description: string, technologyUsed: string,
         image: string, category: string, viewUrl: string, githubUrl: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.technologyUsed = technologyUsed;
        this.image = image;
        this.category = category;
        this.viewUrl = viewUrl;
        this.githubUrl = githubUrl; 
    }
}