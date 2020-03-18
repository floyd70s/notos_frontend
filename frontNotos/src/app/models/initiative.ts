export class Initiative {
    constructor(
        public _id: string,
        public name:string,
        public hashtag: string,
        public description :string,
        public image: string,
        public type: string,
        public status: string,
        public date: number,
        public user: string        
    ){}
}