import User from './User';

export interface Auth {
  email: string;
  password: string;
  user: User | {};
}