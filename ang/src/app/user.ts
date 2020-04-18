export class user {
    
    constructor
    (
   public id: string,
   public name: string,
   public username: string,
   public password: string,
   public email: string,
   public image: string = "",
   public bio: string = "",
   public token: string,
){}

}