import { DbUser } from "../db/schema/user-schema.js";

export default class ValidateUserExist {
  async execute(email) {
    const userConsult = await DbUser.findOne({ email: email });
    if (userConsult) {
      return true;
    } else {
      return false;
    }
  }
}
