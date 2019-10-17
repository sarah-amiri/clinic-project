export class Doctor {
    id: number;
    fname: string;
    lname: string;
    specialty: string;
    attendance: { morning: number[], afternoon: number[] };
    description: string;

    constructor(id: number, fname: string, lname: string, specialty: string, attendance: any, description: string) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.specialty = specialty;
        this.attendance = attendance;
        this.description = description;
    }
}