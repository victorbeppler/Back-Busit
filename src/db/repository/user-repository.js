import { DbUser } from "../schema/user-schema.js";

export class UserRepository {
  async create(user) {
    const consultUser = await DbUser.findOne({ email: user.email });
    if (consultUser) {
      return "User already exists";
    } else {
      return await DbUser.create(user);
    }
  }
  async findUserByEmail(email) {
    const consultUser = await DbUser.find({ email: email });
    return consultUser;
  }
}
