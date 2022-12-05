import { UserRepository } from "../db/repository/user-repository.js";
import { User} from "../model/user.js";

export default class CreateUser {
  async execute(data) {
    const dataModel = new User(data);
    const userCreated = await new UserRepository().create(dataModel);
    return "User created";
  }
}
