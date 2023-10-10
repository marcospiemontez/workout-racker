export default class User {
  id: Number;
  name: String;
  email: String;
  password: String;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}