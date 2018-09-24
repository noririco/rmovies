export default class Movie {
    id:string;
    name: string;
    year: string;
    category: string;
    description?: string;
    imageUrl?: string;
    promoUrl?: string;
    rate?: string;
    hour?: string;
    

    constructor(){
        this.id = "";
        this.name = "";
        this.year = "";
        this.category = "";
    }

    static generateMockMovie() : Movie {
        return {
            id : "1234",
            name : "Bob",
            year : "2019",
            category : "abc"
        }
    }
}