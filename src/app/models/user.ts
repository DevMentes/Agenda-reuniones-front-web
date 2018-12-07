export class User {
  id: string;
  name: string;
  surnames: string;
  email: string;

  constructor(id:string, name:string, surnames:string, email:string)
  {
    this.id = id;
    this.name = name;
    this.surnames = surnames;
    this.email = email;
  }
}
