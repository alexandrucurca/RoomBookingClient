
export class User{
  id: number;
  name: string;
  username: string;
  password: string;
  role: boolean;

  constructor(){}

  static fromHttp(httpUser: User): User{
    const user = new User();
    user.id = httpUser.id;
    user.name = httpUser.name;
    user.password = httpUser.password;
    user.username = httpUser.username;
    user.role = httpUser.role;
    return user;
  }
}
