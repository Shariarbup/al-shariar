export class Project {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public githubLink: string;
    public liveLink:string;

    constructor(id: number, name: string, description: string, imagePath: string, githubLink: string, liveLink:string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.githubLink = githubLink;
        this.liveLink = liveLink;
    }
}