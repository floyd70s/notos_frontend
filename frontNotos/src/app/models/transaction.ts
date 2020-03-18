export class Transaction {
    constructor(
        public _id: string,
        public create_date:Date,
        public amount: number,
        public buyOrder :string,
        public sessionId: string,
        public status: string,
        public dateEndTrx: string,
        public id_donor: number,
        public id_initiative: string
    ){}
}