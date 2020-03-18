export class User {
    constructor(
        public _id: string,
        public name:string,
        public rut: string,
        public email :string,
        public password: string,
        public role: string,
        public phone: string,
        public bank_acount: number,
        public bank: string,
        public status:string,
        public date: Date
    ){}
}