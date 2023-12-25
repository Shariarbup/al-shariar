 export class Education {
    public id: number;
    public instituteType: string;
    public instituteName: string;
    public subject: string;
    public gpa: number;
    public passingYear: string;

    constructor( id: number, instituteType: string, instituteName: string, subject: string, gpa: number, passingYear: string) {
        this.id = id;
        this.instituteType = instituteType;
        this.instituteName = instituteName;
        this.subject = subject;
        this.gpa = gpa;
        this.passingYear = passingYear;
    }
}