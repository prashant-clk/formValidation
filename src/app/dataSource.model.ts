import { User } from "./user.model";
export class StaticData{
    private data : User[] ;
    constructor(){
        this.data = new Array<User> (new User(1,"prasahnt",1342454,"svd@gmail.com","myself"),
        new User(1,"gopal",1342454,"ahf35@gmail.com","rvr"),
        new User(2,"rahul",2532,"hsha@gmail.com","school"),
        new User(3,"paul",7650253,"325k@gmail.com","jc"),
        new User(4,"andria",2092,"25894b@gmail.com","rvr"),
        new User(5," Harleen deol",54546,"gfiuds@gmail.com","school"));
    }
    getData()  : User[]{
        return this.data;
    }
}