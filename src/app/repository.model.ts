import { User } from "./user.model";
import { StaticData } from "./dataSource.model";

export class Model{
    private data_source : StaticData;
    private users : User[];

    constructor(){
        this.data_source = new StaticData();
        this.users = new Array<User>();
        this.data_source.getData().forEach(x => this.users.push(x));
    }
    getusers(): User[]{
        return this.users;
    }
}