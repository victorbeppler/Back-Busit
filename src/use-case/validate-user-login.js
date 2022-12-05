import { UserRepository } from "../db/repository/user-repository.js";

export class ValidateUserLogin {
  async execute(email, password) {
    const user = await new UserRepository().findUserByEmail(email);
    if (user.length === 0) return "User don't exists";
    if (user.length > 1) return "User duplicated";
    if (user[0].password !== password) return "Password invalid";
    return true;
  }
}
