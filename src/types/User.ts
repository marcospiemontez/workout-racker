export default class User {
  id: Number;
  name: String;
  email: String;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}