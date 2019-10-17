export class User {
    firstname: string;
    lastname: string;
    id: number;
    password: string;
    gender: string;
    constructor(fname: string, lname: string, id: number, pass: string, gender: string) {
        this.firstname = fname;
        this.lastname = lname;
        this.id = id;
        this.password = pass;
        this.gender = gender;
    }
}
