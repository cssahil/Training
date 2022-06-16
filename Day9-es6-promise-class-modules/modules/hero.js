import { Person } from "./person.js";

export class Hero extends Person{
    title = "";
    power = 0;
    firstname = "";
    lastname = "";
    #mission = "My Secret Mission";
    static version = 101;
    constructor(htitle, hpower, hfname, hlname){
        super('yes i can walk');
        this.title = htitle;
        this.power = hpower;
        this.firstname = hfname;
        this.lastname = hlname;                
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }
}