export class Work {
    public id: number;
    public instituteName: string;
    public designation: string;
    public duration: string;

    constructor( id: number, instituteName: string, designation: string, duration: string) {
        this.id = id;
        this.instituteName = instituteName;
        this.designation = designation;
        this.duration = duration;
    }
}